import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../common/Button";

interface IForm {
  password: string;
}

const ValidatePassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h3>Checking Password Strength in ReactJS</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">Enter Password: &nbsp;</label>

        <input
          id="password"
          {...register("password", {
            pattern: /[a-zA-z0-9]/,

            required: "Password is required",

            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },

            validate: {
              hasLowercase: (value) =>
                /[a-z]/.test(value) ||
                "Password must contain at least one lowercase letter.",
              hasUppercase: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one Uppercase letter.",
              hasNumber: (value) =>
                /[0-9]/.test(value) ||
                "Password must contain at least one number.",
              hasSpecialChar: (value) =>
                /[^a-zA-Z0-9]/.test(value) ||
                "Password must contain at least one special char.",
            },
          })}
          onChange={() => trigger("password")}
        />

        <br />

        {errors.password && (
          <span style={{ fontWeight: "bold", color: "red" }}>
            {errors.password.message}
          </span>
        )}

        <br />

        <button className="btn btn-warning" type="submit">
          Check password
        </button>
      </form>
    </div>
  );
};

export default ValidatePassword;
