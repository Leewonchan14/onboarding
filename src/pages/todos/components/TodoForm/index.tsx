import { useForm } from 'react-hook-form';

export default function TodoForm({
  title,
  content,
  children,
  onSubmit,
}: {
  title: string;
  content: string;
  onSubmit: (data: { title: string; content: string }) => void;
  children: React.ReactNode;
}) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
    criteriaMode: 'all',
    defaultValues: {
      title,
      content,
    },
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="제목"
        className="w-full p-2 border rounded-lg"
        {...register('title', {
          required: '제목을 입력해주세요.',
        })}
      />
      {errors.title && <p>{errors.title.message}</p>}
      <textarea
        placeholder="내용"
        className="w-full p-2 border rounded-lg"
        {...register('content', {
          required: '내용을 입력해주세요.',
        })}
      />
      {errors.content && <p>{errors.content.message}</p>}
      {children}
    </form>
  );
}
