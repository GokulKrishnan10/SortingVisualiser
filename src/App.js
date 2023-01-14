import "./App.css";
import { BubbleSort } from "./SortingAlgos/bubbleSort.js";
import { HeapSort } from "./SortingAlgos/HeapSort.js";
import { MergeSort } from "./SortingAlgos/MergeSort.js";
import { QuickSort } from "./SortingAlgos/QuickSort.js";
import { str } from "./SortingAlgos/bubbleSort";
import { str1 } from "./SortingAlgos/MergeSort";
import { str2 } from "./SortingAlgos/HeapSort";
import { str3 } from "./SortingAlgos/QuickSort";
import { styles } from "./styles";
import React from "react";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

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
