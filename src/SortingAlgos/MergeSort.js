export function MergeSort(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;
  mergeSort(arr, 0, arr.length - 1, animations);
  return animations;
};

const merge = function (arr, l, m, r, animations) {
  let i = 0,
    j = 0;
  let k = l;
  let L = [];
  let R = [];
  let n1 = m - l + 1;
  let n2 = r - m;
  for (let i = 0; i < n1; ++i) L.push(arr[l + i]);
  for (let j = 0; j < n2; ++j) R.push(arr[m + 1 + j]);
  while (i < n1 && j < n2) {
    animations.push([l + i, m + 1 + j]);
    animations.push([l + i, m + 1 + j]);
    if (L[i] <= R[j]) {
      animations.push([k, L[i]]);
      arr[k++] = L[i++];
    } else {
      animations.push([k, R[j]]);
      arr[k++] = R[j++];
    }
  }
  while (i < n1) {
    animations.push([i + l, i + l]);
    animations.push([i + l, i + l]);
    animations.push([k, L[i]]);
    arr[k++] = L[i++];
  }
  while (j < n2) {
    animations.push([m + 1 + j, m + 1 + j]);
    animations.push([m + 1 + j, m + 1 + j]);
    animations.push([k, R[j]]);
    arr[k++] = R[j++];
  }
  //NOT WORKING CODE
  // let i = l, j = m + 1;
  // let k = l;
  // while (i <= m && j <= r) {
  //     animations.push([i, j])
  //     animations.push([i, j])
  //     if (aux[i] <= aux[j]) {
  //         animations.push([k, aux[i]])
  //         arr[k++] = aux[i++];
  //     } else {
  //         animations.push([k, aux[j]])
  //         arr[k++] = aux[j++];
  //     }
  // }
  // while (i <= m) {
  //     animations.push([i, i])
  //     animations.push([i, i])
  //     animations.push([k, aux[i]])
  //     arr[k++] = aux[i++];
  // }
  // while (j <= r) {
  //     animations.push([j, j])
  //     animations.push([j, j])
  //     animations.push([k, aux[j]])
  //     arr[k++] = aux[j++];
  // }
};

const mergeSort=function(arr, l, r, animations) {
  if (l === r) return;
  let m = Math.floor((l + r) / 2);
  mergeSort(arr, l, m, animations);
  mergeSort(arr, m + 1, r, animations);
  merge(arr, l, m, r, animations);
}
