import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// ข้อมูลนักศึกษาภายใน Code
const inFo = {
  name: "Nuttachai Surathong",
  image: "./public/profile.jpg", // ลิงก์รูปภาพตัวอย่าง
  bio: "นักศึกษาคณะวิศวกรรมศาสตร์ สาขาวิชาวิศวกรรมคอมพิวเตอร์ ชื่นชอบการพัฒนาเว็บแอปพลิเคชันและเทคโนโลยีใหม่ๆ",
  hobbies: ["เขียนโค้ด (Coding)", "อ่านหนังสือพัฒนาตนเอง", "เล่นเกม"],
  cmuEmail: "nuttachai.surathong@cmu.ac.th",
  studentId: "680610671",
};

export function StudentInfo() {
  return (
    <Drawer swipeDirection={"right"}>
      {/* ปุ่มสีฟ้าแสดง ชื่อ-สกุล นักศึกษา */}
      <DrawerTrigger>
        <Button className="bg-sky-500 hover:bg-sky-600 text-white font-medium shadow-sm transition-colors">
          {inFo.name}
        </Button>
      </DrawerTrigger>

      {/* หน้าต่าง Drawer ที่อยู่ด้านข้างขวา */}
      <DrawerContent className="top-0 right-0 left-auto mt-0 w-full max-w-sm h-full rounded-l-xl rounded-r-none border-l flex flex-col">
        <div className="flex-1 overflow-y-auto p-6">
          <DrawerHeader className="p-0 text-left">
            <DrawerTitle className="text-xl font-bold border-b pb-4">
              ข้อมูลนักศึกษา
            </DrawerTitle>
          </DrawerHeader>

          {/* ส่วนแสดงเนื้อหาข้อมูลนักศึกษา */}
          <div className="mt-6 flex flex-col items-center text-center space-y-5">
            {/* รูปภาพนักศึกษา */}
            <img
              src={inFo.image}
              alt={inFo.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-sky-100 shadow-md"
            />

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                {inFo.name}
              </h3>
              <p className="text-sm text-sky-600 font-medium">CMU Student</p>
            </div>

            {/* คำอธิบายสั้นๆ */}
            <div className="w-full text-left space-y-1">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                คำอธิบาย
              </span>
              <p className="text-sm text-card-foreground bg-muted/50 p-3 rounded-lg leading-relaxed">
                {inFo.bio}
              </p>
            </div>

            {/* งานอดิเรก */}
            <div className="w-full text-left space-y-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                งานอดิเรก
              </span>
              <div className="flex flex-wrap gap-1.5">
                {inFo.hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full border border-sky-100"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* ช่องทางการติดต่อ */}
            <div className="w-full text-left space-y-3 pt-2 border-t border-dashed">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">CMU Email:</span>
                <a
                  href={`mailto:${inFo.cmuEmail}`}
                  className="text-sky-600 hover:underline font-medium"
                >
                  {inFo.cmuEmail}
                </a>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Student ID:</span>
                <span className="font-medium">{inFo.studentId}</span>
              </div>
            </div>
          </div>
        </div>

        <DrawerFooter className="border-t p-4">
          <DrawerClose>
            <Button variant="outline" className="w-full">
              ปิดหน้าต่าง
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
