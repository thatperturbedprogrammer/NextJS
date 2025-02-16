"use client";

import { useForm, SubmitHandler } from "react-hook-form";

// Define the expected structure of form data
interface NoteFormData {
  title: string;
  content: string;
}

interface NoteFormProps {
  onSubmit: SubmitHandler<NoteFormData>; // Type onSubmit correctly
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const { register, handleSubmit } = useForm<NoteFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("title", { required: true })}
        placeholder="Title"
        className="border p-2 w-full"
      />
      <textarea
        {...register("content", { required: true })}
        placeholder="Content"
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-black text-white p-2 rounded">
        Add Note
      </button>
    </form>
  );
}
