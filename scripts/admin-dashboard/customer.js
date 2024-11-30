"use strict";

const customerPro = [
	{
		name: "Jane Cooper",
		email: "jane@gmail.com",
		profileImg: "/assets/images/profile-1.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Floyd Miles",
		email: "floyd@gmail.com",
		profileImg: "/assets/images/profile-admin.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Cameron Williamson",
		email: "cameron@gmail.com",
		profileImg: "/assets/images/profile-2.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Cody Fisher",
		email: "cody@gmail.com",
		profileImg: "/assets/images/profile-3.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Ralph Edwards",
		email: "ralph@gmail.com",
		profileImg: "/assets/images/profile-4.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Annette Black",
		email: "annette@gmail.com",
		profileImg: "/assets/images/profile-5.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Theresa Webb",
		email: "theresa@gmail.com",
		profileImg: "/assets/images/profile-6.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Dianne Russell",
		email: "dianne@gmail.com",
		profileImg: "/assets/images/profile-7.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Jenny Wilson",
		email: "jenny@gmail.com",
		profileImg: "/assets/images/profile_1.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
	{
		name: "Devon Lane",
		email: "devon@gmail.com",
		profileImg: "/assets/images/profile_3.png",
		phone: "(201) 555-0124",
		created: "6 April 2023",
	},
];

function objIteratorTask(arrOfObj) {
	const container = document.getElementById("customer_pro_body");

	arrOfObj.map((obj) => {
		console.log(obj);

		container.innerHTML += `
            <tr>
                <td>
                    <img
                    src=${obj.profileImg}
                    alt="profile"
                    width="40"
                    />
                    <p>
                        <strong class="profile_name">${obj.name}</strong>

                        <span class="profile_email">${obj.email}</span>
                    </p>
                </td>
                <td>${obj.phone}</td>
                <td>${obj.created}</td>
                <td>
                <button>
                <img src="/assets/images/edit.png" alt="" />
                </button>

                <button>
                <img src="/assets/images/bi_unlock.png" alt="" />
                </button>
                </td>
            </tr>
        `;
	});
}
objIteratorTask(customerPro);
