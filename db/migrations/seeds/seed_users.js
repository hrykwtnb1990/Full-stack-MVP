/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('kaizen').del();
  await knex('kaizen').insert([
    {
      id: 1,
      date: '20251117',
      name: '渡辺',
      number: 57463,
      department: '吉原組立',
      theme: 'からくり改善',
      before: '重量物を持っていた',
      after: '設備で交換する',
      solution: '設備作成',
      Effect_Amount: 30000,
      safe: true,
      quality: true,
      man_Hour: 2400,
    },
    {
      id: 2,
      date: '20251118',
      name: '裕之',
      number: 60000,
      department: '吉原塗装',
      theme: '工程改善',
      before: '作業遅れ',
      after: '作業が間に合うようになった',
      solution: '1秒改善',
      Effect_Amount: 50000,
      safe: false,
      quality: true,
      man_Hour: 2400,
    },
    {
      id: 3,
      date: '20251119',
      name: 'Hiro',
      number: 70000,
      department: '吉原車体',
      theme: '改善',
      before: '歩行帯のペンキ剥がれ',
      after: 'ペンキを塗りました',
      solution: '工程改善',
      Effect_Amount: 1000,
      safe: true,
      quality: false,
      man_Hour: 1500,
    },
  ]);
};
