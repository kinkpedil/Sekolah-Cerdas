export async function GET() {
  return Response.json({
    progress: { weekly: 72, averageScore: 84, completedExercises: 12, activeDays: 5, studyMinutes: 225 },
    streak: { days: 5 },
    notifications: [
      { id: "n-1", type: "assignment", title: "Tugas Fisika dikumpulkan besok", read: false },
      { id: "n-2", type: "forum", title: "Ada balasan baru di diskusi Matematika", read: false },
      { id: "n-3", type: "school", title: "Jadwal ujian tengah semester", read: true },
    ],
  });
}
