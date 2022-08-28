const heapify = function(arr, n, i, animations){
    let large = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] > arr[large]) {
      large = left;
    }
    if (right < n && arr[right] > arr[large]) {
      large = right;
    }
    if (large !== i) {
      animations.push([i, large]);
      animations.push([i, large]);
      animations.push([i, large]);
      let t = arr[i];
      arr[i] = arr[large];
      arr[large] = t;
      heapify(arr, n, large, animations);
    }
  };

  const heapsort = function(arr, animations){
    let n = arr.length;
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
      heapify(arr, n, i, animations);
    }
    console.log("After Sorted " + arr);
    for (let i = n - 1; i >= 0; i--) {
      animations.push([0, i]);
      animations.push([0, i]);
      animations.push([0, i]);
      let t = arr[0];
      arr[0] = arr[i];
      arr[i] = t;
      heapify(arr, i, 0, animations);
    }
    // console.log("After Sorted HEAP sorting " + arr)
  };

  export function HeapSort(arr){
    const animations = [];
    if (arr.length <= 1) return arr;
    heapsort(arr, animations);
    return animations;
  };