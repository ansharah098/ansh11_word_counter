#! /user/bin/env node
import inquirer from "inquirer";
const user_ans:{
    sentence:string
   }=await inquirer.prompt([{
        name: "sentence",
        type:"string",
        message:"Please Enter your sentence to count word:",


    }])
    const words=user_ans.sentence.trim().split(" ")
     console.log(`your sentence word count is ${words.length}`)



    console.log(words);

