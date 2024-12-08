"use strict";

import { menuModalTask, defaultTask } from "../modules/menu-list-modal.js";

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

const container = document.getElementById("customer_pro_body");
const menuList = document.querySelector(".menu-list").children;
const pignationCounterCont = document.querySelector("div.pignation_count");

menuModalTask();
defaultTask(menuList, "Customers");

let pignationCounter = 10;
let countRender = 1;
function objIteratorTask(arrOfObj) {
	const selectEl = document.querySelector("#nums_show");

	const totalNumsCon = document.querySelector("#nums_show + span");

	arrOfObj.map((obj) => {
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
                <img src="/assets/images/edit.png" alt="" class="edit_action_btn"/>
                </button>

                <button>
                <img src="/assets/images/bi_lock.png" alt="" />
                </button>
                </td>
            </tr>
        `;
	});

	arrOfObj.map((_, i) => {
		i++;

		if (i === pignationCounter) {
			const div = document.createElement("div");
			const checkRender =
				countRender === 1
					? "nums_pagination  active_pagination"
					: "nums_pagination";

			div.setAttribute("class", checkRender);
			div.textContent = countRender;
			pignationCounterCont.appendChild(div);

			selectEl.innerHTML += `
			<option value="Showing">Showing ${i++}</option>
		`;
			countRender++;
			pignationCounter += 10;
		}
	});

	totalNumsCon.textContent = arrOfObj.length;
}
objIteratorTask(customerPro);

container.addEventListener("click", (e) => {
	if (e.target.classList.contains("edit_action_btn")) {
		window.location.href = "/pages/admin-dashboard/customer_details.html";
	}
});
