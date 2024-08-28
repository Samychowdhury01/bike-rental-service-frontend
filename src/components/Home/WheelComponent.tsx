import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import { Input } from "../ui/input";
import { FaRegCopy } from "react-icons/fa";

const WheelComponent = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [prizeValue, setPrizeValue] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const data = [
    { option: "10", coupon: "getYour10" },
    { option: "20", coupon: "abc123xyz" },
    { option: "30", coupon: "promo30off" },
    { option: "50", coupon: "save50now" },
  ];

  const backgroundColors = ["#0D47A1", "#70bbe0", "#42A5F5", "#BBDEFB"];
  const textColors = ["#0b3351"];
  const outerBorderColor = "#E3F2FD";
  const outerBorderWidth = 10;
  const innerBorderColor = "#30261a";
  const innerBorderWidth = 0;
  const innerRadius = 0;
  const radiusLineColor = "#eeeeee";
  const radiusLineWidth = 8;
  const fontFamily = "Nunito";
  const fontWeight = "bold";
  const fontSize = 20;
  const fontStyle = "normal";
  const textDistance = 60;
  const spinDuration = 1.0;

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const onStopSpinning = () => {
    setMustSpin(false);
    setPrizeValue(data[prizeNumber].option);
    setCouponCode(data[prizeNumber].coupon);
    setModalVisible(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode).then(() => {
      Swal.fire({
        title: "Done",
        text: "Coupon code has been copied to your clipboard.",
        icon: "success",
      });
      setModalVisible(false);
    });
  };

  return (
    <>
      {/* wheel section */}
      <div className="flex items-center justify-center mb-5">
        <div>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            spinDuration={spinDuration}
            startingOptionIndex={2}
            textDistance={textDistance}
            onStopSpinning={onStopSpinning}
          />
          <div className="text-center mt-5">
            <Button onClick={handleSpinClick}>Spin to get Discount</Button>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Congratulations!! You got {prizeValue}% discount
            </h2>
            <p className="mb-4">Use this coupon code to get your discount:</p>
           <div className="flex items-center gap-4">
           <Input
              type="text"
              defaultValue={couponCode}
              readOnly
              
            />
            <Button
            variant="outline"
              onClick={copyToClipboard}
            >
              <FaRegCopy />
            </Button>
           </div>

          </div>
        </div>
      )}
    </>
  );
};

export default WheelComponent;
