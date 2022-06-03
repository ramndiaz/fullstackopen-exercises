const Content = (props) => {
    const info = props.parts;
    const displayParts = info.map((item) => {
      return (
        <li key={item.id}>
          {item.part} : {item.exercise}
        </li>
      );
    });
    return (
      <>
        <ul style={{ listStyle: "none" }}>{displayParts}</ul>
      </>
    );
  };

  export default Content;