export const LoginData = [
  {
    id: 1,
    label: "Email",
    placeholder: "Enter your email",
    type: "text",
    required: true,
    name: "name",
  },
  {
    id: 2,
    label: "Password",
    placeholder: "********",
    type: "password",
    required: true,
    name: "password",
    pattern: "/^[a-fA-F0-9 0-9]{8}$/",
    bottomLabel: "Must be at least 8 characters long",
  },
];
