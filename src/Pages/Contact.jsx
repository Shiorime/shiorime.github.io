import React from 'react'
import "./styles.css"

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>

      <p>Contact me on discord. Username is shiorime.</p>

      <div className="input-wrapper">
        <form>
          <label htmlFor="name">Name:</label><br />
          <input type="text" name="name" id="name"></input> <br />

          <br />

          <label htmlFor="email">Email:</label><br />
          <input type="text" name="email" id="email"></input> <br />

          <br />

          <label htmlFor="message">Message:</label><br />
          <textarea name="message" id="message"></textarea><br />

          <br />

          <label htmlFor="priority">Priority</label><br />
          <select name="priority" id="priority">
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>

          <br/>
          <br/>

          <fieldset>
            <legend>Type</legend>
            <label className="labels">
              <input type="radio" name="type" value="1" />
              Complaint
            </label>
            <br/>
            <label className="labels">
              <input type="radio" name="type" value="2" />
              Suggestion
            </label>
          </fieldset>

          <br/>

          <label>
            <input type="checkbox" name="terms"/>
            I agree to the terms and conditions.
          </label>

          <br />

          <input type="submit"></input>
        </form>
      </div>
    </>
  )
}
