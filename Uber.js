// To implement the boxes and achieve the behavior you're aiming for, you'll need to manage the state of clicked boxes and ensure that each box turns green when clicked,
// then turns back to its original color after a set timeout in the same sequence they were clicked. Here's how you can do it:

const App = () => {
  const [clickedBoxIds, setClickedBoxIds] = React.useState([]);

  // Function to handle when a box is clicked
  const turnGreen = (id) => {
    setClickedBoxIds((prevIds) => [...prevIds, id]);
  };

  // Function to determine if the box should be green or not
  const getClassName = (boxId) => {
    return clickedBoxIds.includes(boxId) ? "greenBox" : "box";
  };

  // Effect to reverse the green color in the same order they were clicked
  React.useEffect(() => {
    if (clickedBoxIds.length > 0) {
      const timer = setTimeout(() => {
        setClickedBoxIds((prevIds) => prevIds.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [clickedBoxIds]);

  return (
    <div className="app">
      <div className="firstRow">
        <div
          onClick={() => turnGreen(0)}
          id="box1"
          className={getClassName(0)}
        ></div>
        <div
          onClick={() => turnGreen(1)}
          id="box2"
          className={getClassName(1)}
        ></div>
        <div
          onClick={() => turnGreen(2)}
          id="box3"
          className={getClassName(2)}
        ></div>
      </div>
      <div className="secondRow">
        <div
          onClick={() => turnGreen(3)}
          id="box4"
          className={getClassName(3)}
        ></div>
      </div>
      <div className="thirdRow">
        <div
          onClick={() => turnGreen(4)}
          id="box5"
          className={getClassName(4)}
        ></div>
        <div
          onClick={() => turnGreen(5)}
          id="box6"
          className={getClassName(5)}
        ></div>
        <div
          onClick={() => turnGreen(6)}
          id="box7"
          className={getClassName(6)}
        ></div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
// .box {
//     width: 100px;
//     height: 100px;
//     background-color: white;
//     border: 1px solid black;
//     margin: 5px;
// }

// .greenBox {
//     background-color: green;
// }
