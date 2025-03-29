/**
 * @file makeCancelablePromise.js
 * @module preloading/makeCancelablePromise
 * @desc Utility function to wrap a Promise and provide cancellation support.
 *       Useful for preloading systems where the user may navigate away or cancel an async task mid-execution.
 * 
 * @created Mar 28, 2025
 * @updated Mar 29, 2025
 * 
 * @features
 * - Wraps any Promise and provides a `.cancel()` function.
 * - Prevents further action or state updates when the promise is canceled.
 * - Rejects the wrapped promise with `{ isCanceled: true }` when canceled.
 *
 * @usage
 * const { promise, cancel } = makeCancelablePromise(fetchData());
 * cancel(); // cancels the operation
 * 
 * @dependencies
 * - None (pure JavaScript utility)
 */

export const makeCancelablePromise = (promise) => {
  // Flag to track cancellation state
  let hasCanceled = false;

  // Create a wrapped promise that checks for cancellation
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (value) => (hasCanceled ? reject({ isCanceled: true }) : resolve(value)),
      (error) => (hasCanceled ? reject({ isCanceled: true }) : reject(error))
    );
  });

  // Return the wrapped promise and the cancel function
  return {
    promise: wrappedPromise,

    /**
     * Cancels the promise.
     * When canceled, the wrapped promise will reject with `{ isCanceled: true }`.
     */
    cancel: () => {
      hasCanceled = true;
    },
  };
};
