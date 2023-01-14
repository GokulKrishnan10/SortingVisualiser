export function QuickSort(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;
  quickSort(arr, 0, arr.length - 1, animations);
  //  console.log(com + " comparitions for " + arr.length + " elements");
  return animations;
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const randPartition = (arr, s, e, animations) => {
  let pivotIndex = Math.floor(getRandomArbitrary(s, e));
  //  console.log("rand value is " + pivotIndex)
  animations.push([pivotIndex, e]);
  animations.push([pivotIndex, e]);
  animations.push([pivotIndex, e]);
  // animations.push([pivotIndex,e])
  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[e];
  arr[e] = temp;
  return partition(arr, s, e, animations);
};

const partition = function (arr, s, e, animations) {
  let pivot = arr[e];
  let pIndex = s;
  for (let i = s; i < e; i++) {
    if (arr[i] <= pivot) {
      //  com++;
      animations.push([pIndex, i]);
      animations.push([pIndex, i]);
      animations.push([pIndex, i]);
      //animations.push([pIndex,i])
      let t = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = t;
      pIndex++;
    }
  }
  // com++;
  animations.push([pIndex, e]);
  animations.push([pIndex, e]);
  animations.push([pIndex, e]);
  // animations.push([pIndex,e])
  let t = arr[pIndex];
  arr[pIndex] = arr[e];
  arr[e] = t;
  return pIndex;
};

const quickSort = function (arr, s, e, animations) {
  if (s < e) {
    let pIndex = randPartition(arr, s, e, animations);
    quickSort(arr, s, pIndex - 1, animations);
    quickSort(arr, pIndex + 1, e, animations);
  }
};
export let str3 = `public class QuickSort {
  public int randPartition(int[] arr,int s,int e){
      int pivotIndex=(int)(Math.random()*(e-s)+s);
      int t=arr[pivotIndex];
      arr[pivotIndex]=arr[e];
      arr[e]=t;
      return partition(arr,s,e);
  }
  public int partition(int[] arr,int s,int e){
      int pivot=arr[e];
      int pIndex=s;
      for(int i=s;i<e;i++){
          if(arr[i]<=pivot)
              int t=arr[i];
              arr[i]=arr[pIndex];
              arr[pIndex]=t;
              pIndex++;
          }
      }
      int t=arr[pIndex];
      arr[pIndex]=arr[e];
      arr[e]=t;
      return pIndex;
  }
  public void quickSort(int[] arr,int s,int e){
      if(s<e){
          int pIndex=randPartition(arr,s,e);
          quickSort(arr,s,pIndex-1);
          quickSort(arr,pIndex+1,e);
      }
  }
}`;
