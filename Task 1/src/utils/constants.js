import React from "react";

import { BsPatchCheckFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/home",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "Form",
    url: "/",
  },
];

export const services = [
  {
    id: 1,
    icon: <BsPatchCheckFill />,
    title: "Included",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <FaWindowClose />,
    title: "Not Included",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <BsPatchCheckFill />,
    title: "Included",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];
