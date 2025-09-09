import React from "react";
import "../css/aboutus.css";

const AboutUs: React.FC = () => (
  <div className="aboutus-container">
    <h2 className="aboutus-title">
      Về dự án ParkIn.AI – Bãi đỗ thông minh, hành trình an tâm
    </h2>
    <section className="aboutus-section">
      <h3>Đảm bảo tính đổi mới và ứng dụng công nghệ IT</h3>
      <ul>
        <li>
          <b>Đổi mới sáng tạo:</b> Tích hợp AI + dữ liệu lớn (big data) để dự
          đoán nhu cầu bãi đỗ theo thời gian thực, gợi ý điểm đỗ tối ưu dựa vào
          hành vi người dùng, thời tiết, sự kiện.
        </li>
        <li>
          <b>Tự động hoá thanh toán – không tiếp xúc:</b> Nạp ví, tự động trừ
          tiền khi hoàn tất order.
        </li>
        <li>
          <b>Cộng đồng & nền tảng mở:</b> Cho phép các bãi đỗ tư nhân đăng ký,
          quản lý thông minh qua app, tăng nguồn cung mà không cần xây thêm hạ
          tầng.
        </li>
      </ul>
      <ul>
        <li>
          <b>Ứng dụng mobile:</b> iOS, Android
        </li>
        <li>
          <b>Định vị, bản đồ tích hợp</b>
        </li>
        <li>
          <b>Cơ sở dữ liệu đám mây, AI, machine learning</b>
        </li>
      </ul>
    </section>
    <section className="aboutus-section">
      <h3>Pain Point – Vấn đề cần giải quyết</h3>
      <b>Người dùng cá nhân:</b>
      <ul>
        <li>Khó tìm bãi đỗ, đặc biệt giờ cao điểm</li>
        <li>Tốn thời gian, gây stress, tiêu tốn nhiên liệu</li>
        <li>Giá cả không minh bạch, trả tiền mặt bất tiện</li>
        <li>App hiện tại chưa thân thiện, định vị sai, thanh toán khó khăn</li>
      </ul>
      <b>Chủ bãi đỗ, garage, dịch vụ ô tô:</b>
      <ul>
        <li>Khó quản lý lưu lượng, thiếu số hoá</li>
        <li>Không tiếp cận được khách hàng tiềm năng</li>
        <li>Thiếu dữ liệu để tối ưu hóa hoạt động, doanh thu</li>
        <li>Tối ưu hoá chi phí thời gian thấp điểm</li>
      </ul>
      <b>Lý do chọn ý tưởng này:</b>
      <ul>
        <li>
          TP.HCM có gần 900.000 xe ô tô, chỉ hơn 120 điểm đỗ được cấp phép
        </li>
        <li>
          Thói quen dùng ô tô cá nhân tăng, hệ sinh thái đỗ xe chưa số hoá
        </li>
        <li>
          Đô thị thông minh là xu hướng, TP khuyến khích giải pháp công nghệ số
        </li>
        <li>
          Dự án giải quyết pain point cá nhân và góp phần phát triển thành phố
          thông minh
        </li>
      </ul>
    </section>
    <section className="aboutus-section">
      <h3>USP – Điểm khác biệt và lợi thế cạnh tranh</h3>
      <ul>
        <li>
          <b>Gợi ý chỗ đỗ thông minh bằng AI:</b> Đề xuất điểm tối ưu (gần, rẻ,
          còn chỗ trống, tiện đường đi).
        </li>
        <li>
          <b>Thanh toán tự động:</b> Nạp ví một lần, không cần check-in thủ
          công.
        </li>
        <li>
          <b>Mở rộng dịch vụ:</b> Đặt lịch bảo dưỡng, rửa xe, sửa xe... trong
          cùng hệ sinh thái.
        </li>
        <li>
          <b>Mô hình chia sẻ chỗ đỗ tư nhân:</b> Cho thuê bãi trống ngắn hạn như
          Airbnb cho chỗ đỗ xe.
        </li>
        <li>
          <b>Nền tảng chia sẻ chỗ đỗ:</b> Người dân/doanh nghiệp có chỗ trống có
          thể đăng ký làm "Chủ bãi đỗ cộng đồng".
        </li>
        <li>
          <b>Tiềm năng mở rộng:</b> Đặt chỗ bảo dưỡng, sửa chữa, rửa xe, thay
          nhớt tại garage đối tác gần bạn.
        </li>
        <li>
          <b>Mạng xã hội nhỏ cho tài xế:</b> Đánh giá, bình luận, chia sẻ trải
          nghiệm, cảnh báo bãi đỗ thu phí bất hợp lý.
        </li>
        <li>
          <b>Hợp tác với thành phố thông minh & cơ quan giao thông:</b> Tích hợp
          điều phối giao thông, quy hoạch đô thị, vé phạt online.
        </li>
      </ul>
    </section>
  </div>
);

export default AboutUs;
