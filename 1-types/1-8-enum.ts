{
  // Enum
  // Javascript엔 없다.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDENESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDENESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednsday";
  enum Days { // xx
    Monday,
    Tuesday,
    Wedensday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);
  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednsday";
}
