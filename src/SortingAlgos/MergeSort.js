export function MergeSort(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;
  mergeSort(arr, 0, arr.length - 1, animations);
  return animations;
}

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
};

const mergeSort = function (arr, l, r, animations) {
  if (l === r) return;
  let m = Math.floor((l + r) / 2);
  mergeSort(arr, l, m, animations);
  mergeSort(arr, m + 1, r, animations);
  merge(arr, l, m, r, animations);
};
export let str1 = `class MergeSort {
  void merge(int arr[], int l, int m, int r)
  {
      int n1 = m - l + 1;
      int n2 = r - m;
      int L[] = new int[n1];
      int R[] = new int[n2];
      for (int i = 0; i < n1; ++i)
          L[i] = arr[l + i];
      for (int j = 0; j < n2; ++j)
          R[j] = arr[m + 1 + j];
      int i = 0, j = 0;
      int k = l;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }

      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }

      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
  void sort(int arr[], int l, int r)
  {
      if (l < r) {

          int m =l+ (r-l)/2;

          sort(arr, l, m);
          sort(arr, m + 1, r);

          merge(arr, l, m, r);
      }
  }
}`;
