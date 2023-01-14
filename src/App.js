import "./App.css";
import { BubbleSort } from "./SortingAlgos/bubbleSort.js";
import { HeapSort } from "./SortingAlgos/HeapSort.js";
import { MergeSort } from "./SortingAlgos/MergeSort.js";
import { QuickSort } from "./SortingAlgos/QuickSort.js";
import React from "react";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let str = `class BubbleSort {
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
let str1 = `class MergeSort {
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
let str2 = `
class HeapSort {
  public void heapify(int[] arr,int n,int i){
      int large=i;
      int left=(2*i)+1;
      int right=(2*i)+2;
      if(left<n && arr[left]>arr[large]){
          large=left;
      }
      if(right<n && arr[right]>arr[large]){
          large=right;
      }
      if(large!=i){
          int t=arr[i];
          arr[i]=arr[large];
          arr[large]=t;
          heapify(arr,n,large);
      }
  }
  public void buildmaxheap(int[] arr){
      int n=arr.length;
      for(int i=n/2-1;i>=0;i--){
          heapify(arr,n,i);
      }
  }
  void heapsort(int[] arr){
      buildmaxheap(arr);
      int n=arr.length;
      for(int i=n-1;i>=0;i--){
          int t=arr[0];
          arr[0]=arr[i];
          arr[i]=t;
          heapify(arr,i,0);
      }
  }
}`;
let str3 = `public class QuickSort {
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
function Code(props) {
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        backgroundColor: "white",
        marginLeft: "10cm",
        width: "17cm",
        height: "12cm",
        // borderRadius: "45px",
        marginTop: "19cm",
      }}
    >
      <nav style={styles.nav1}>
        <h3>{props.view}</h3>
      </nav>
      <textarea
        readOnly={true}
        style={styles.textarea1}
        id="area1"
        value={
          props.view === "Merge Sort"
            ? str1
            : props.view === "Bubble Sort"
            ? str
            : props.view === "Heap Sort"
            ? str2
            : props.view === "Quick Sort"
            ? str3
            : "nothing"
        }
      />
    </div>
  );
}

const styles = {
  h3a: {
    fontStyle: "normal",
    marginTop: "0.75cm",
    position: "absolute",
    marginLeft: "1.5cm",
  },
  h4a: {
    marginTop: "0.4cm",
    position: "absolute",
    marginLeft: "34cm",
    top: "0",
  },
  array_contain: {
    marginTop: "1.7cm",
    marginLeft: "0.1cm",
    position: "absolute",
    left: "10px",
    width: "100%",
    backgroundColor: "black",
  },
  button: {
    fontWeight: "bold",
    marginTop: "0.4cm",
    marginLeft: "13cm",
    cursor: "pointer",
    boxShadow: "0px 8px 15px rgba(71, 142, 255, 0.1)",
    position: "absolute",
  },
  button1: {
    fontWeight: "bold",
    marginLeft: "16cm",
    marginTop: "0.4cm",
    cursor: "pointer",
    boxShadow: "0px 8px 15px rgba(71, 142, 255, 0.1)",
    position: "absolute",
  },
  button2: {
    fontWeight: "bold",
    marginLeft: "19cm",
    marginTop: "0.4cm",
    cursor: "pointer",
    boxShadow: "0px 8px 15px rgba(71, 142, 255, 0.1)",
    position: "absolute",
  },
  button3: {
    fontWeight: "bold",
    marginLeft: "22cm",
    marginTop: "0.4cm",
    cursor: "pointer",
    boxShadow: "0px 8px 15px rgba(71, 142, 255, 0.1)",
    position: "absolute",
  },
  button4: {
    fontWeight: "bold",
    marginLeft: "25cm",
    marginTop: "0.4cm",
    cursor: "pointer",
    boxShadow: "0px 8px 15px rgba(71, 142, 255, 0.1)",
    position: "absolute",
  },
  button5: {
    fontWeight: "bold",
    marginLeft: "28cm",
    marginTop: "0.4cm",
    cursor: "pointer",
    boxShadow: "0px 8px 15px rgba(71, 142, 255, 0.1)",
    position: "absolute",
  },
  button6: {
    fontWeight: "bold",
    marginLeft: "31cm",
    marginTop: "0.4cm",
    boxShadow: "0px 8px 15px rgba(71, 142, 255, 0.1)",
    position: "absolute",
  },
  array_bar: {
    width: "2.25px",
    backgroundColor: "turquoise",
    display: "inline-block",
    margin: "0.8px",
  },
  navBar: {
    display: "inline",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    color: "aliceblue",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    fontStyle: "oblique",
    backgroundColor: "navy",
    height: "2cm",
    width: "40cm",
    marginLeft: "0.1cm",
  },
  bardiv: {
    marginTop: "1cm",
    height: "17cm",
    marginLeft: "0.1cm",
    marginRight: "1cm",
    position: "absolute",
    display: "block",
  },

  div1: {
    position: "absolute",
    backgroundColor: "white",
    marginLeft: "1cm",
    width: "17cm",
    height: "12cm",
    borderRadius: "45px",
  },
  nav1: {
    marginLeft: "0.3cm",
    backgroundColor: "blue",
    width: "16.2cm",
    height: "1cm",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: "white",
    top: "0cm",
  },
  textarea1: {
    fontSize: "16px",
    resize: "none",
    width: "16cm",
    height: "10cm",
    color: "white",
    borderColor: "black",
    backgroundColor: "black",
    marginLeft: "0.3cm",
  },
  forceStop: {
    marginLeft: "11cm",
    position: "absolute",
    marginTop: "0.2cm",
    boxShadow: "2px 2px black",
    cursor: "pointer",
    width: "4cm",
    height: "1cm",
    backgroundColor: "red",
    color: "white",
  },
  range: {
    top: "0",
    marginLeft: "34cm",
    position: "absolute",
    marginTop: "1cm",
    // overflow:'auto'
  },
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      range: 100,
      width: 13,
      view: "none",
      force: false,
      speed: 20,
      name: "Sorting",
    };
  }

  createArray = () => {
    const arr = [];
    for (let i = 0; i < this.state.range; i++) {
      arr.push(getRandomArbitrary(0, 600) | 0);
    }
    this.setState({
      arr,
    });
    const A = document.getElementsByClassName("array_bar");
    Array.from(A).forEach((e) => {
      e.style.backgroundColor = "turquoise";
    });
    // console.log(arr);
  };

  componentDidMount() {
    // console.log("Creating Array On Loading");
    this.createArray();
  }

  testHeapSort = () => {
    this.setState({ name: "Heap Sort" });
    document.querySelectorAll("li").forEach((items) => {
      items.style.backgroundColor = "navy";
      items.style.color = "white";
    });
    document.getElementById("4").style.backgroundColor = "aqua";
    document.getElementById("4").style.color = "black";
    document
      .querySelectorAll("li")
      .forEach((items) => (items.style.pointerEvents = "none"));
    document.getElementById("stop").style.pointerEvents = "";
    let n = 0;
    document.getElementById("range").style.pointerEvents = "none";
    setTimeout(() => {
      const animations = HeapSort(this.state.arr);
      n = animations.length;
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array_bar");
        const colorchange = i % 3 !== 2;
        if (colorchange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "turquoise";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            if (color === "red") {
              setTimeout(() => {
                const [barOneIdx, barTwoIdx] = animations[i];
                var h1 = arrayBars[barOneIdx].style.height;
                var h2 = arrayBars[barTwoIdx].style.height;
                arrayBars[barOneIdx].style.height = h2;
                arrayBars[barTwoIdx].style.height = h1;
              }, 2);
            }
          }, i * this.state.speed);
        }
      }
    }, 500);
    setTimeout(() => {
      setTimeout(() => {
        document.getElementById("range").style.pointerEvents = "";
        console.log("gokul krishnAN E HERE", this.state.speed * n + n + 500);
        const arrayBars = document.getElementsByClassName("array_bar");
        console.log(arrayBars.length);
        console.log(arrayBars[0]);
        //arrayBars[80].style.backgroundColor = "red";
        let A = Array.from(arrayBars);
        A.forEach((e) => {
          setTimeout(() => {
            console.log("NO");
            e.style.backgroundColor = "red";
          });
        });
      }, this.state.speed * n + n - 2000);
    }, 1000);
  };

  testQuickSort = () => {
    this.setState({ name: "Quick Sort" });
    document.querySelectorAll("li").forEach((items) => {
      items.style.backgroundColor = "navy";
      items.style.color = "white";
    });
    document.getElementById("2").style.backgroundColor = "aqua";
    document.getElementById("2").style.color = "black";
    document
      .querySelectorAll("li")
      .forEach((items) => (items.style.pointerEvents = "none"));
    document.getElementById("stop").style.pointerEvents = "";
    document.getElementById("range").style.pointerEvents = "none";
    let n = 0;
    document.getElementById("range").style.pointerEvents = "none";
    setTimeout(() => {
      const animations = QuickSort(this.state.arr);
      n = animations.length;
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array_bar");
        const colorchange = i % 3 !== 2;
        if (colorchange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "turquoise";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            if (color === "red") {
              setTimeout(() => {
                const [barOneIdx, barTwoIdx] = animations[i];
                var h1 = arrayBars[barOneIdx].style.height;
                var h2 = arrayBars[barTwoIdx].style.height;
                arrayBars[barOneIdx].style.height = h2;
                arrayBars[barTwoIdx].style.height = h1;
              }, 1);
            }
          }, i * this.state.speed); //3
        }
      }
    }, 500);
    setTimeout(() => {
      setTimeout(() => {
        document.getElementById("range").style.pointerEvents = "";
        console.log("gokul krishnAN E HERE", this.state.speed * n + n + 500);
        const arrayBars = document.getElementsByClassName("array_bar");
        console.log(arrayBars.length);
        console.log(arrayBars[0]);
        //arrayBars[80].style.backgroundColor = "red";
        let A = Array.from(arrayBars);
        A.forEach((e) => {
          setTimeout(() => {
            console.log("NO");
            e.style.backgroundColor = "red";
          });
        });
      }, this.state.speed * n + n - 2000);
    }, 1000);
  };

  testMergeSort = () => {
    this.setState({ name: "Merge Sort" });
    document.querySelectorAll("li").forEach((items) => {
      items.style.backgroundColor = "navy";
      items.style.color = "white";
    });
    document.getElementById("3").style.backgroundColor = "aqua";
    document.getElementById("3").style.color = "black";
    document
      .querySelectorAll("li")
      .forEach((items) => (items.style.pointerEvents = "none"));
    document.getElementById("stop").style.pointerEvents = "";
    document.getElementById("range").style.pointerEvents = "none";
    let n = 0;
    setTimeout(() => {
      const animations = MergeSort(this.state.arr);
      n = animations.length;
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array_bar");
        const colorchange = i % 3 !== 2;
        if (colorchange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "turquoise";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * this.state.speed); //5
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * this.state.speed); //5
        }
      }
    }, 500);
    setTimeout(() => {
      setTimeout(() => {
        document.getElementById("range").style.pointerEvents = "";
        const arrayBars = document.getElementsByClassName("array_bar");
        let A = Array.from(arrayBars);
        console.log(A);
        for (let i = 0; i < A.length; i++) {
          setTimeout(() => {
            A[i].style.backgroundColor = "red";
          }, i + 500);
        }
      }, this.state.speed * n + n - 2000);
    }, 1000);
  };

  testBubbleSort = () => {
    let lock = false;
    this.setState({ name: "Bubble Sort" });
    document.querySelectorAll("li").forEach((items) => {
      items.style.backgroundColor = "navy";
      items.style.color = "white";
    });
    document.getElementById("1").style.backgroundColor = "aqua";
    document.getElementById("1").style.color = "black";
    document
      .querySelectorAll("li")
      .forEach((items) => (items.style.pointerEvents = "none"));
    document.getElementById("stop").style.pointerEvents = "";
    document.getElementById("range").style.pointerEvents = "none";
    let n = 0;
    setTimeout(() => {
      const animations = BubbleSort(this.state.arr);
      n = animations.length;
      const newAnimations = [];
      for (const animie of animations) {
        newAnimations.push(animie.compare);
        newAnimations.push(animie.compare);
        newAnimations.push(animie.swap);
      }
      for (let i = 0; i < newAnimations.length; i++) {
        const arrayBars = document.getElementsByClassName("array_bar");
        const colorchange = i % 3 !== 2;
        if (colorchange) {
          const [barOneIdx, barTwoIdx] = newAnimations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "turquoise";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            if (color === "red") {
              setTimeout(() => {
                const [barOneIdx, barTwoIdx] = newAnimations[i];
                var h1 = arrayBars[barOneIdx].style.height;
                var h2 = arrayBars[barTwoIdx].style.height;
                arrayBars[barOneIdx].style.height = h2;
                arrayBars[barTwoIdx].style.height = h1;
              }, 10);
            }
          }, i * this.state.speed); //10
        }
      }
    }, 500);
    setTimeout(() => {
      setTimeout(() => {
        document.getElementById("range").style.pointerEvents = "";
        console.log("gokul krishnAN E HERE", this.state.speed * n + n + 500);
        const arrayBars = document.getElementsByClassName("array_bar");
        console.log(arrayBars.length);
        console.log(arrayBars[0]);
        //arrayBars[80].style.backgroundColor = "red";
        let A = Array.from(arrayBars);
        A.forEach((e) => {
          setTimeout(() => {
            console.log("NO");
            e.style.backgroundColor = "red";
          }, 1000);
        });
      }, this.state.speed * n + n - 2000);
    }, 1000);
  };

  rangeChange = (event) => {
    this.setState({
      range: event.target.value,
    });
    document
      .querySelectorAll("li")
      .forEach((items) => (items.style.pointerEvents = ""));
    switch (true) {
      case event.target.value <= 100:
        this.setState({ width: 13, speed: 20 });
        break;
      case event.target.value > 100 && event.target.value <= 134:
        this.setState({ width: 10, speed: 17 });
        break;
      case event.target.value > 134 && event.target.value <= 160:
        this.setState({ width: 8, speed: 15 });
        break;
      case event.target.value > 160 && event.target.value <= 184:
        this.setState({ width: 7, speed: 14 });
        break;
      case event.target.value > 184 && event.target.value <= 210:
        this.setState({ width: 6, speed: 13 });
        break;
      case event.target.value > 210 && event.target.value <= 243:
        this.setState({ width: 5, speed: 12 });
        break;
      case event.target.value > 243 && event.target.value <= 295:
        this.setState({ width: 4, speed: 10 });
        break;
      case event.target.value > 295 && event.target.value <= 327:
        this.setState({ width: 3.5, speed: 9 });
        break;
      case event.target.value > 327 && event.target.value <= 365:
        this.setState({ width: 3, speed: 9 });
        break;
      case event.target.value > 365:
        this.setState({ width: 2.7, speed: 5 });
        break;
      default:
    }

    this.createArray();
  };

  render() {
    const { arr } = this.state;
    return (
      <>
        <div style={styles.navBar}>
          <h3 style={styles.h3a}>Sorting Algorithm Visualiser</h3>
          <ul>
            <li
              onClick={() => {
                window.alert("Force Reload");
                window.location.reload();
              }}
              id="stop"
            >
              FORCE STOP
            </li>
            <li onClick={this.testBubbleSort} id="1">
              Bubble Sort
            </li>
            <li onClick={this.testQuickSort} id="2">
              Quick Sort
            </li>
            <li onClick={this.testMergeSort} id="3">
              Merge Sort
            </li>
            <li onClick={this.testHeapSort} id="4">
              Heap Sort
            </li>
          </ul>
          <h4 style={styles.h4a}>Choose the range({this.state.range})</h4>
          <input
            type="range"
            min="100"
            max="400"
            style={styles.range}
            id="range"
            onChange={this.rangeChange}
          />
        </div>

        <div style={styles.array_contain} id="out">
          <div style={styles.bardiv} onLoad={this.createArray}>
            {arr.map((value, i) => (
              <div
                className="array_bar"
                key={i}
                style={{
                  height: `${value}px`,
                  backgroundColor: "turquoise",
                  width: `${this.state.width}px`,
                  display: "inline-block",
                  margin: "0.5px",
                }}
              ></div>
            ))}
          </div>
          <Code view={this.state.name} />
        </div>
      </>
    );
  }
}
export default App;
