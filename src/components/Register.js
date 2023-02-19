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
                <label>email</label>
                <input placeholder="email" type="email" />
            </div>
            <div className="formGroup">
                <label>password</label>
                <input placeholder="password" type="password" />
            </div>
            <button type="submit">register</button>
        </form>
    );
}
