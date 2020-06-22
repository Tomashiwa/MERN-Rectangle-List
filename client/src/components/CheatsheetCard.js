import React, { useEffect,useRef,useState } from 'react'
//import UserContext from "./context/UserContext";

import "./css/CheatsheetCard.css"

import axios from 'axios';

function CheatsheetCard({sheet}) {
   var voteRef = useRef(sheet.rating);
   
   /*const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
		isLoaded: false
	});

    var userID = userData.user.id;
    
    useEffect(() => {
		// Check if there's any token in local storage and use it to retrieve user information
		const checkLoggedIn = async() => {
			let token = localStorage.getItem("auth-token");

			if(!token) {
				localStorage.setItem("auth-token", "");
				token = "";
			}

			const tokenRes = await axios.post("/api/users/tokenIsValid", null, {headers: {"Content-Type": "application/json", "x-auth-token": token}});

			if(tokenRes.data.isValid) {
				setUserData({token, user: tokenRes.data.user, isLoaded: true});
			} else {
				setUserData({token: undefined, user: undefined, isLoaded: true});
			}
		}

		checkLoggedIn();
    }, []);
    
    var newArray = userData
    
    useEffect(() => {
        const bookmarkBtn = document.querySelector("bookmark");
       
        const bookmarkClicked = () => {
            axios.put("/api/users/${userID}",{bookmark:newArray})
                .catch(err => {
                    console.log(`Fail to bookmark: ${err}`);
                });
        }
        bookmarkBtn.addEventListener("click", bookmarkClicked);
        
        return() => {
            bookmarkBtn.removeEventListener("click", bookmarkClicked);
        }
    });*/
    
    /*useEffect(() => {
        const upvoteBtn = document.querySelector("upvote");
        const downvoteBtn = document.querySelector("downvote");
        const newUpvote = (voteRef + 1);
        const newDownvote = (voteRef - 1);
       // const newArray = userData.user.rated.push([sheet.id,type:upvoted]
     
        const upvoteClicked = () => {
            axios.put("/api/cheatsheets/${cheatsheet.id}",{
                rating:newUpvote
            })
            .catch(err => {
                console.log(`Fail to upvote: ${err}`);
            });
        }

        const downvoteClicked = () => {
            axios.put("/api/cheatsheets/${cheatsheet.id}",{
                rating:newDownvote
            })
            .catch(err => {
                console.log(`Fail to downvote: ${err}`);
            });
        }
        
        upvoteBtn.addEventListener("click", upvoteClicked);
        downvoteBtn.addEventListener("click", downvoteClicked);

        return() => {
            upvoteBtn.removeEventListener("click", upvoteClicked);
            downvoteBtn.removeEventListener("click", downvoteClicked);
        };
    },[voteRef]);*/
        
        return (
            <div class = "row">
              <div class = "col-md-4">
                      <div class = "cheatsheet">
                        <img src = {sheet.file} alt="" class="img-fluid"></img>
                            <div class="cheatsheet-text">
                                <p>{sheet.name}</p>
                                  </div>
                                  <div class ="cheatsheet-rating">
                                      <p>Vote:{sheet.rating}</p>
                                  </div>
                                    <div class = "bookmark">
                                        <button type = "button" class = "btn btn-outline-dark">
                                            <svg class="bi bi-bookmarks" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M7 13l5 3V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.234z"/>
                                                <path d="M14 14l-1-.6V2a1 1 0 0 0-1-1H4.268A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v12z"/>
                                             </svg>
                                        </button>
                                    </div>
                                    <div class = "preview">
                                        <button type = "button" class = "btn btn-outline-dark">
                                            <svg class="bi bi-collection" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class = "author">
                                         <button type = "button" class = "btn btn-outline-dark">
                                            <svg class="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class = "download">
                                        <button type = "button" class = "btn btn-outline-dark">
                                            <svg class="bi bi-download" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"/>
                                                <path fill-rule="evenodd" d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"/>
                                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class = "upvote">
                                        <button type = "button" class = "btn btn-outline-dark">
                                        <svg class="bi bi-arrow-up-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"/>
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707 5.354 8.354a.5.5 0 1 1-.708-.708l3-3z"/>
</svg>
                                        </button>
                                    </div>
                                    <div class = "downvote">
                                        <button type = "button" class = "btn btn-outline-dark">
                                        <svg class="bi bi-arrow-down-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
</svg>
                                        </button>
                                    </div>
         
                                </div>
                            </div>
                        </div>
                
   
        )
    }
        

export default CheatsheetCard;
