console.log("hi notes")
const fs = require("fs")
const fetchNote = () => {
 try {let noteString = fs.readFileSync("notes-data.json")
 return JSON.parse(noteString)
} 
catch (error) {return []}
}
let saveNotes = (note)=>{fs.writeFileSync("notes-data.json",JSON.stringify(note))} 

let addNote =(title,body)=>{
   let notes=fetchNote();
   let note ={
    title,
    body,
   }

 
   
let duplicateNote =notes.filter((item)=> item.title === title)
if (duplicateNote.length == 0) {
    
    notes.push(note)
    saveNotes(notes)
    return note
}
// console.log(duplicateNote)

}
let getNotes=(title)=>{
    var notes = fetchNote()
   var filteredNotes= notes.filter((note)=> note.title===title )
   console.log(filteredNotes)
   return filteredNotes[0]
}



let removeNote=(title)=>{
   let notes =fetchNote()
   let filteredNotes = notes.filter((item)=> item.title !== title)
    saveNotes(filteredNotes)
    return notes.length != filteredNotes.length
}
   
module.exports={
    addNote,
    getNotes,
    removeNote,
    fetchNote
}