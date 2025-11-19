import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit } = useForm();
  const today = new Date().toISOString().split('T')[0].replace(/-/g, '');

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[900px] mx-auto p-6 bg-white rounded-xl shadow-xl"
    >
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block mb-2 font-semibold">日付：</label>
          <input
            type="number"
            {...register('date', { required: true, valueAsNumber: true })}
            defaultValue={today}
            className="w-full px-3 py-2 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">名前：</label>
          <input
            type="text"
            {...register('name')}
            placeholder="名前"
            className="w-full px-4 py-3 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">社員番号：</label>
          <input
            type="number"
            {...register('number', { required: true, valueAsNumber: true })}
            placeholder="社員番号"
            className="w-full px-4 py-3 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">所属部署：</label>
          <input
            type="text"
            {...register('department')}
            placeholder="所属部署"
            className="w-full px-4 py-3 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <label className="block mb-2 font-semibold">題名：</label>
        <input
          type="text"
          {...register('theme')}
          placeholder="題名"
          className="w-full px-3 py-3 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 font-semibold">
            改善前の状態：
            <textarea
              type="text"
              {...register('before')}
              placeholder="改善前の状態"
              className="w-full h-40 px-4 py-3 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
            ></textarea>
          </label>
        </div>
        <div>
          <label className="block mb-2 font-semibold">
            改善後の状態：
            <textarea
              type="text"
              {...register('after')}
              placeholder="改善後の状態"
              className="w-full h-40 px-4 py-3 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
            ></textarea>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <label>
          対策内容：
          <input
            type="text"
            {...register('solution')}
            placeholder="対策内容"
            className="w-full px-4 py-3 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
          />
        </label>
        <label>
          効果金額：
          <input
            type="number"
            {...register('Effect_Amount', {
              required: true,
              valueAsNumber: true,
            })}
            placeholder="効果金額"
            className="w-full px-4 py-3 border-4 border-blue-500 rounded-xl text-lg focus:outline-none focus:border-blue-700"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <label className="flex items-center p-4 border rounded-xl shadow cursor-pointer hover:bg-blue-50">
          安全に関わる要素が含まれている：
          <input
            type="checkbox"
            {...register('safe')}
            className="w-6 h-6 text-blue-600 border-gray-300 rounded mr-3"
          />
        </label>

        <label className="flex items-center p-4 border rounded-xl shadow cursor-pointer hover:bg-blue-50">
          品質に関わる要素が含まれている：
          <input
            type="checkbox"
            {...register('quality')}
            className="w-6 h-6 text-blue-600 border-gray-300 rounded mr-3"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <label>
          1時間あたりの工数金額:
          <input
            {...register('man_Hour', { required: true, valueAsNumber: true })}
            defaultValue="2400"
          />
        </label>

        <button
          className="px-6 py-3 bg-blue-500 text-white font-semibold rouded-lg shadow hover:bg-blue-600 transition"
          type="submit"
        >
          送信
        </button>
      </div>
    </form>
  );
}

export default Form;
