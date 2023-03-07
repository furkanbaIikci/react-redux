import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import Note from "./Note";

import { addNote } from "../Stores/notes";

function Notes() {
	const notes = useSelector(state => state.notes.notes);
	const dispatch = useDispatch();
  const [notesTemp, setNotesTemp] = useState(notes)

	const [color, setColor] = useState("#fc4a4a");
  const [note, setNote] = useState("")



  useEffect(() => {
    setNotesTemp(notes)
  }, [notes])

  const addNoteFunc = () => {

    let noteObj = {
      note : note,
      color : color
    }

    dispatch(addNote(noteObj))
    setNote("")
  }

  const filterNotes = (e) => {
    let filteredData = notes.filter((note) => {
      return note.note.toUpperCase().includes(e.toUpperCase())
    })
    if(e === ""){
      setNotesTemp(notes)
    }else{
      setNotesTemp(filteredData)
    }

  }

	return (
		<div>
			<div
				style={{
					backgroundColor: "gray",
          
					width: "40%",
					margin: "0 auto",
					borderRadius: "10px",
					paddingBottom: "50px",
				}}>
				<h1 style={{ textAlign: "center" }}>Notes</h1>

				<input
					style={{
						display: "block",
						width: "250px",
						height: 25,
						margin: "10px auto",
						borderRadius: "10px",
						fontSize: 20,
					}}
          onChange={(e) => filterNotes(e.target.value)}
					type='text'
				/>

				<div
					style={{
						backgroundColor: "white",
						width: "80%",
						height: "200px",
						margin: "0 auto",
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}>
						<textarea
							style={{
								width: "100%",
								height: "150px",
								resize: "none",
								fontSize: "22px",
								border: "none",
								outline: "none",
							}}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              ></textarea>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								paddingTop: 10,
								paddingLeft: 10,
							}}>
							<div className='colors'>
								<input type={"radio"}  name={"color"} id='red' value={"#fc4a4a"} onClick={(e) => setColor(e.target.value)} />
								<input type={"radio"} name={"color"} id='green' value={"#00ff00"} onClick={(e) => setColor(e.target.value)} />
								<input type={"radio"} name={"color"} id='blue' value={"#0000ff"}  onClick={(e) => setColor(e.target.value)} />
								<input type={"radio"} name={"color"} id='pink' value={"#ff00ff"}  onClick={(e) => setColor(e.target.value)} /> 
							</div>

							<button
								style={{
									backgroundColor: "#505050",
									padding: "4px 12px",
									border: "none",
									outline: "none",
									cursor: "pointer",
									fontSize: "20px",
									color: "white",
									borderRadius: "10px",
									marginRight: 20,
								}}
                onClick={addNoteFunc}>
								Save
							</button>
						</div>
					</div>
				</div>
				<div
					style={{
						width: "80%",
						margin: "20px auto",
					}}>
            <div style={{height: '50vh', overflow: 'auto'}}>
            {
              notesTemp.map((note, index) => {
                return <Note key={index} color={note.color} note={note.note} />
              })
            }
				</div>
				</div>
			</div>
		</div>
	);
}

export default Notes;
