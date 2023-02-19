import React from "react";
import "./Register.css";

export default function Register() {
    return (
        <form className="form" noValidate>
            <div className="formGroup">
                <label>name</label>
                <input placeholder="name" type="text" />
            </div>
            <div className="formGroup">
                <input placeholder="password" type="password" />
            </div>
            <button type="submit">register</button>
        </form>
    );
}
