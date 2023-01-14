export function BubbleSort(arr) {
  const animations = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      const animation = {};
      if (arr[j] > arr[j + 1]) {
        animation.compare = [j, j + 1];
        animation.swap = [j, j + 1];
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        animations.push(animation);
      }
    }
  }
  // console.log("HELLO " + c + " iterations");
  return animations;
}
export let str = `class BubbleSort {
  public void bubbleSort(int arr[]){
    int n = arr.length;
    for (int i = 0; i < n - 1; i++){
      for (int j = 0; j < n - i - 1; j++){
        if (arr[j] > arr[j + 1]){
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
}`;
