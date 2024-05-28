export const weekDay = (getDays: string): string[] => {
  const weekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabádo',
  ];

  const newGetDays = getDays.replace(' ', '').replace(',', '').split('');

  const newWeekDays: string[] = [];

  newGetDays.map((day) => newWeekDays.push(weekDays[Number(day)]));

  return newWeekDays;
};
