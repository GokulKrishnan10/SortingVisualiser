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
class Code extends React.Component {
  render() {
    return (
      <div
        className="div1"
        style={{
          display: this.props.view,
          position: "absolute",
          backgroundColor: " white",
          marginLeft: "10cm",
          width: "17cm",
          height: "12cm",
          borderRadius: "45px",
        }}
      >
        <nav style={styles.nav1}>
          <h3>Bubble Sort</h3>
        </nav>
        <textarea readonly="true" style={styles.textarea1}>
          {str}
        </textarea>
      </div>
    );
  }
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
    marginLeft: " 1.5cm",
    position: "absolute",
    left: "10px",
    width: "40cm",
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
    marginRight: "0.7cm",
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
    aligItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    width: "16.2cm",
    height: "1cm",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: "white",
  },
  textarea1: {
    fontSize: "16px",
    resize: "none",
    width: "16cm",
    height: "10cm",
    color: "blue",
    borderColor: "white",
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
    console.log(arr);
  };

  componentDidMount() {
    console.log("Creating Array On Loading");
    this.createArray();
  }

  testHeapSort = () => {
    document.querySelectorAll("li").forEach((items) => {
      items.style.backgroundColor = "navy";
      items.style.color = "white";
    });
    document.getElementById("4").style.backgroundColor = "aqua";
    document.getElementById("4").style.color = "black";
    const animations = HeapSort(this.state.arr);
    document
      .querySelectorAll("li")
      .forEach((items) => (items.style.pointerEvents = "none"));
    document.getElementById("stop").style.pointerEvents = "";
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
  };

  testQuickSort = () => {
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
    const animations = QuickSort(this.state.arr);
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
        }, i * 3);
      }
    }
  };

  testMergeSort = () => {
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
    const animations = MergeSort(this.state.arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array_bar");
      console.log(animations[i]);
      const colorchange = i % 3 !== 2;
      if (colorchange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          console.log(color);
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 5);
      }
    }
  };

  testBubbleSort = () => {
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
    const animations = BubbleSort(this.state.arr);
    const newAnimations = [];
    console.log("Animations length " + animations.length);
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
          console.log(color);
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
        }, i * 10);
      }
    }
    console.log("Completed Sorting");
    // setTimeout(callback,1000);
    //  document.querySelector('#range').style.pointerEvents="";
    /*   const { compare, swap } = animations[i];
           console.log("ith element is " + animations[i].compare)
           setTimeout(() => {
               const arrayBars = document.getElementsByClassName('array_bar');
               arrayBars[compare[1]].style.backgroundColor = 'red';
               arrayBars[compare[0]].style.backgroundColor = 'red';
               var h1 = arrayBars[compare[1]].style.height
               var h2 = arrayBars[compare[0]].style.height
               arrayBars[compare[1]].style.height = h2;
               arrayBars[compare[0]].style.height = h1;
               setTimeout(() => {
                   arrayBars[compare[1]].style.backgroundColor = 'torquoise'
                   arrayBars[compare[0]].style.backgroundColor = 'torquoise'
               }, (i + 1) * 10);
  
           }, i * 10);*/
  };

  rangeChange = (event) => {
    this.setState({
      range: event.target.value,
    });
    document
      .querySelectorAll("li")
      .forEach((items) => (items.style.pointerEvents = ""));
    console.log(event.target.value);
    switch(true){
      case event.target.value <= 100:
        this.setState({ width: 13 });
        break;
      case event.target.value > 100 && event.target.value <= 134:
        this.setState({ width: 10 });
        break;
      case event.target.value > 134 && event.target.value <= 160:
        this.setState({ width: 8 });
        break;
      case event.target.value > 160 && event.target.value <= 184:
        this.setState({ width: 7 });
        break;
      case event.target.value > 184 && event.target.value <= 210:
        this.setState({ width: 6 });
        break;
      case event.target.value > 210 && event.target.value <= 243:
        this.setState({ width: 5 });
        break;
      case event.target.value > 243 && event.target.value <= 295: 
        this.setState({ width: 4 });
        break;
      case event.target.value > 295 && event.target.value <= 327:
        this.setState({ width: 3.5 });
        break;
      case event.target.value > 327 && event.target.value <= 365:
        this.setState({ width: 3 });
        break;
      case event.target.value>365:
        this.setState({ width: 2.7 });
        break;
      default:
        
    }
    // if (event.target.value <= 100) {
    //   this.setState({ width: 13 });
    // } else if (event.target.value > 100 && event.target.value <= 134) {
    //   this.setState({ width: 10 });
    // } else if (event.target.value > 134 && event.target.value <= 160) {
    //   this.setState({ width: 8 });
    // } else if (event.target.value > 160 && event.target.value <= 184) {
    //   this.setState({ width: 7 });
    // } else if (event.target.value > 184 && event.target.value <= 210) {
    //   this.setState({ width: 6 });
    // } else if (event.target.value > 210 && event.target.value <= 243) {
    //   this.setState({ width: 5 });
    // } else if (event.target.value > 243 && event.target.value <= 295) {
    //   this.setState({ width: 4 });
    // } else if (event.target.value > 295 && event.target.value <= 327) {
    //   this.setState({ width: 3.5 });
    // } else if (event.target.value > 327 && event.target.value <= 365) {
    //   this.setState({ width: 3 });
    // } else {
    //   this.setState({ width: 2.7 });
    // }
    this.createArray();
    // console.log(this.state.arr)
  };

  MouseOver = () => {
    const div = document.createElement("div");
    div.style.height = "2cm";
    div.style.width = "7cm";
    div.style.float = "true";
    div.style.backgroundColor = "white";
    div.style.boxShadow = "5px 10px 10px 5px #888888";
    div.style.borderRadius = "45px";
    div.style.marginTop = "1cm";
    div.style.borderStyle = "solid";
    div.style.borderColor = "black";
    div.style.textAlign = "center";
    div.style.fontFamily = "cursive";
    div.style.position = "relative";
    div.setAttribute("id", "hidden");
    const danger = `WARNING!!
    This forcibly 
    Loads the browser`;
    div.innerText = danger;
    document.getElementById("out").append(div);
  };

  MouseOut = () => {
    const divs = document.getElementById("hidden");
    divs.remove();
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
                window.location.reload();
              }}
              onMouseOver={this.MouseOver}
              onMouseOut={this.MouseOut}
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
          {/* <button style={styles.forceStop} onClick={this.clickForce}>FORCE STOP</button>
                    <button onClick={this.testBubbleSort} style={styles.button1}>Bubble Sort</button>
                    <button onClick={this.testQuickSort} style={styles.button2}>Quick Sort</button>
                    <button onClick={this.testMergeSort} style={styles.button3}>Merge Sort</button>
                    <button onClick={this.testHeapSort} style={styles.button4}>Heap Sort</button>
                    <button style={styles.button5} onClick={this.viewCode}>CODE</button>
                    <button style={styles.button6} onClick={this.closeCode}>CLOSE</button> */}
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
            <Code view={this.state.view} />
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
        </div>
      </>
    );
  }
}
export default App;
