import { FC } from "react";

export const Section6: FC = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-cover bg-center bg-fixed" 
         style={{ backgroundImage: "url('/images/section-6/bg.png')" }}>
      <div className="container mx-auto px-6">
        
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
