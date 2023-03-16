console.log("hi nodemon")

const fs =require("fs")
const _ =require("lodash")
const notes = require("./notes")
const yargs=require("yargs")

let argv = yargs

.command("add","add a new note",{
    title:{
        describe:"title of note",
        alias:"t",demand:"true"
    },
    body:{
        describe:"body of note",
        alias:"b",demand:"true"
    }
})
.command("list","list all of notes")
.command("read","read a note",{
    title:{
        describe:"title of note",
        alias:"t",demand:"true"
    },
   
})
.command("remove","remove a note",{
    title:{
        describe:"title of note",
        alias:"t",demand:"true"
    },
   
})
.help()
.argv
const command=argv ._[0]

    if(command==="add"){
         let note =notes.addNote(argv.title,argv.body)
         if(note){ 
            console.log(`note crated! -----------  your note title is : ${note.title} and body is : ${note.body}`)
        }
        else{
            console.log("note title taken and exist alredy! ")
        }
    }
    else if(command === 'list'){
        var listNote = notes.fetchNote() 
        console.log(` ${listNote.length} note(s) added \n --------\n `)
        listNote.forEach(element => {
        console.log(`title : ${element.title}  \n body : ${element.body} \n---------\n`)
        })
    }

    else if(command==="read"){
      let note=notes.getNotes(argv.title)
        if(note){
            console.log("note was found");
    console.log("---------");
    console.log(`title : ${note.title}    body : ${note.body}` );
        }
        else console.log("note not found")
    }


    else if(command==="remove"){
       var note= notes.removeNote(argv.title)
        var message =note ? "note was removed" : "note not found"
        console.log(message)
    }


// console.log(argv)



