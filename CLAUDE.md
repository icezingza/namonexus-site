# NamoNexus Development Protocol

## Core Philosophy
- **Architectural Authority:** ทุกฟีเจอร์ต้องเน้นความเสถียรและความปลอดภัยระดับ Enterprise.
- **Sovereign AI Focus:** NamoNexus ไม่ใช่แค่เว็บ, มันคือระบบนิเวศ (Ecosystem) ที่เชื่อมโยง AI กับความเป็นมนุษย์.
- **Clean & Modular:** ยึดมั่นใน React 19, TypeScript และ Tailwind 4 (Modular CSS เท่านั้น).

## Implementation Rules
1. **Repository Structure:**
   - ห้ามแตก Repository ใหม่โดยไม่จำเป็น.
   - ฟีเจอร์ใหม่ต้องเป็น "Feature Folder" ภายใต้ `src/` เท่านั้น.
2. **Coding Standards:**
   - ใช้ TypeScript เสมอ เพื่อ Type Safety.
   - Tailwind CSS Utility classes คือมาตรฐานการจัดรูปแบบ (No custom CSS unless absolutely necessary).
   - ทุก Component ต้องถูกทดสอบความสมบูรณ์ (Component Testing).
3. **Deployment Strategy:**
   - Deploy ผ่าน Vercel เสมอ.
   - ตรวจสอบ `vercel.json` ทุกครั้งที่มีการเพิ่ม Route ใหม่ เพื่อทำ Rewrite ให้ถูกต้อง.
4. **Maintenance:**
   - อัปเดต `README.md` หากมีการเปลี่ยนแปลงสถาปัตยกรรมที่สำคัญ.
   - ห้ามใช้ Hardcoded path สำหรับ assets, ให้ใช้ import หรือ public path ที่ถูกต้อง.

## Workflow: Analyze → Propose → Risk → Execute

ก่อนการ Refactor หรือ Feature Implementation ที่มีนัยสำคัญทุกครั้ง:

1. **Analyze:** ระบุผลกระทบต่อ Unified Architecture ปัจจุบันโดยย่อ.
2. **Propose:** เสนอแผนตามมาตรฐานในไฟล์นี้.
3. **Risk:** ระบุ Trade-off หรือความเสี่ยงอย่างน้อย 1 ข้อ (เช่น Performance, Dependency conflicts).
4. **Execute:** ลงมือหลังได้รับอนุมัติแผนเท่านั้น.

## Communication with AI
- **Tone:** Professional, Concise, Technical.
- **Mandatory:** ก่อนเริ่มงานใหม่ ให้แจ้ง Assumption และ Trade-offs ที่อาจเกิดขึ้นเสมอ.

## Known Gaps (to resolve)
- Component Testing (Rule 2.3) ยังไม่มี test framework configure ในโปรเจกต์ — การเลือก stack (เช่น Vitest + Testing Library) เป็นงานที่ต้องผ่าน Workflow ด้านบนก่อน.
