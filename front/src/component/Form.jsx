import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const payload = {
      ...formData,
      date: Number(formData.date),
      Effect_Amount: Number(formData.Effect_Amount),
      man_Hour: Number(formData.man_Hour),
    };

    const res = await fetch('http://localhost:3000/kaizen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    console.log(json);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input {...register('date')} placeholder="記入日" />
      <input {...register('name')} placeholder="名前" />
      <input {...register('number')} placeholder="社員番号" />
      <input {...register('department')} placeholder="所属部署" />
      <input {...register('theme')} placeholder="題名" />
      <input {...register('before')} placeholder="改善前の状態" />
      <input {...register('after')} placeholder="改善後の状態" />
      <input {...register('solution')} placeholder="対策内容" />
      <input {...register('Effect_Amount')} placeholder="効果金額" />
      <input
        type="checkbox"
        {...register('safe')}
        className="w-4 h-4 accent-blue-600"
      />
      <input
        type="checkbox"
        {...register('quality')}
        className="w-4 h-4 accent-blue-600"
      />
      <input {...register('man_Hour')} placeholder="工数" />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        type="submit"
      >
        送信
      </button>
    </form>
  );
}

export default Form;
