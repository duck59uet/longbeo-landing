import { FC } from "react";

export const Section6: FC = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-cover bg-center bg-fixed" 
         style={{ backgroundImage: "url('/images/section-6/bg.png')" }}>
      <div className="container mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white mb-12 mt-8">
          <div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg flex items-center">
            <img src="/images/section-6/user.png" alt="Người dùng" className="w-12 h-12 mr-4" />
            <div>
              <p className="text-3xl font-bold">8,886</p>
              <p className="text-sm">Người dùng</p>
            </div>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg flex items-center">
            <img src="/images/section-6/profile.png" alt="Profiles" className="w-12 h-12 mr-4" />
            <div>
              <p className="text-3xl text-start font-bold">2</p>
              <p className="text-sm">Tổng số Profiles</p>
            </div>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg flex items-center">
            <img src="/images/section-6/project.png" alt="Dự án hoàn thành" className="w-12 h-12 mr-4" />
            <div>
              <p className="text-3xl font-bold">3,258,425</p>
              <p className="text-sm">Dự án đã hoàn thành</p>
            </div>
          </div>
        </div>

        
        {/* Section Title */}
        <h2 className="text-center text-white text-4xl font-bold mb-12 mt-8">Dịch vụ của chúng tôi</h2>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceItem
            icon="/images/section-6/1.png"
            title="Miễn phí CPANEL"
            content="Chúng tôi cung cấp MIỄN PHÍ cPanel cho tất cả người dùng trên hệ thống. Bạn chỉ cần gửi tên miền cho chúng tôi là có thể sở hữu Panel của riêng mình một cách chuyên nghiệp."
          />
          <ServiceItem
            icon="/images/section-6/2.png"
            title="Miễn phí API"
            content="Với xu hướng mới, Chúng tôi hỗ trợ MIỄN PHÍ API cho tất cả người dùng để dễ dàng tích hợp vào website của họ."
          />
          <ServiceItem
            icon="/images/section-6/3.png"
            title="Giá cả cạnh tranh"
            content="Với công nghệ mới và đội ngũ lập trình viên chuyên nghiệp, chúng tôi cho ra đời những sản phẩm cực kỳ CHẤT LƯỢNG & GIÁ CẢ CẠNH TRANH."
          />
          <ServiceItem
            icon="/images/section-6/4.png"
            title="Nhanh chóng và đơn giản"
            content="Với hơn 5 năm kinh nghiệm trong lĩnh vực MMO, Chúng tôi tạo ra một giao diện trực quan, các thao tác đơn giản, tối ưu hóa, tiết kiệm thời gian gấp 5 lần so với các cPanel khác."
          />
        </div>
      </div>
    </div>
  );
};

// Service Card Component (Icon trên, Text căn trái)
const ServiceItem = ({ icon, title, content }: { icon: string; title: string; content: string }) => {
  return (
    <div className="flex flex-col items-start text-left p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
      {/* Icon (Trên cùng, không border) */}
      <div className="mb-4">
        <img src={icon} alt="icon" className="w-48 h-48" />
      </div>

      {/* Tiêu đề */}
      <h3 className="text-white font-bold text-lg">{title}</h3>

      {/* Nội dung */}
      <p className="text-gray-300 text-sm mt-2">{content}</p>
    </div>
  );
};
