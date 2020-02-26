import React from 'react';
import './StateFull.css';

class StateFull extends React.Component{
    render(){
        return(
        <div>
	    <h1>Form Login</h1>

	    <div class="kotak_login">
		<h1 class="tulisan_login"><b>Tugas Pertemuan Empat</b></h1>

		<form>
			<label>Username</label>
			<input type="text" name="username" class="form_login" placeholder="Masukkan Username"></input>
            <br/>
			<label>Password</label>
			<input type="text" name="password" class="form_login" placeholder="Masukkan Password Anda"></input>
            <br/><br/>
			<input type="submit" class="tombol_login" value="LOGIN"></input>

			<br/>
			<br/>
			<center>
            <p><label for="setcookie"><input type="checkbox" name="setcookie" value="true" id="setcookie" /> Remember Me</label></p>
            <div class="container">
            <div class="button-container">
                <button type="submit" class="button"><span>Cancel</span></button>
            </div> 
            </div>
			</center>
        </form>
        </div>
        </div>
        );
    }
}

export default StateFull;