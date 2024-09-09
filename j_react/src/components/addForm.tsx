import { Form, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { ITask, SetTaskType } from "../types/taskType";

interface AddFormProps {
  setTask: SetTaskType;
}

export default function AddForm({ setTask }: AddFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITask>();

  const onSubmit: SubmitHandler<ITask> = (data: ITask) => {
    setTask(data);
  };

  return (
    <Form className="m-1" onSubmit={handleSubmit(onSubmit)}>
      <Form.Control
        className="my-1"
        type="text"
        placeholder="enter task name..."
        {...register("taskname", { required: "task name is required" })}
      />
      {errors.taskname && (
        <span className="error">{errors.taskname.message}</span>
      )}

      <Form.Select
        className={`{my-1 ${errors.priority ? "is-invalid" : ""}`}
        aria-label="Default select priority"
        {...register("priority", { required: "priority is required" })}
      >
        <option>enter priority...</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </Form.Select>
      {errors.priority && (
        <span className="error invalid-feedback">
          {errors.priority.message}
        </span>
      )}

      <Form.Select
        className="my-1"
        {...register("category", { required: "category is required" })}
      >
        <option>enter category...</option>
        <option value="2 mins">2 min</option>
        <option value="timed"> timed</option>
      </Form.Select>
      {errors.category && (
        <span className="error">{errors.category.message}</span>
      )}

      <Form.Control
        className="my-1"
        type="date"
        placeholder="enter createdDate..."
        {...register("date", { required: "date is required" })}
      />
      {errors.date && <span className="error"> {errors.date.message} </span>}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
