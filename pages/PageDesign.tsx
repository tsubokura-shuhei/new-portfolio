import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { imageFile } from "../lib/imageFile";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../components/style/design.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Header from "../components/atomic/templates/Header";

export default function PageDesign() {
  const [moduleOpen, setModuleOpen] = useState(false);
  const [namelist, setNameList] = useState(false);
  const ModuleLoading = () => {
    setModuleOpen((prevState) => !prevState);
  };
  const fileName = ["image1", "image2"];

  //マテリアルUI追加箇所▼
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const closeButtonStyle = {
    height: 0,
    textAlign: "right",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //複数処理
  const [selectedItem, setSelectedItem] = useState<string>("");
  const urlFile = "";
  const ButtonList = imageFile;

  const onOpenDialog = (name: string) => {
    setSelectedItem(name);
  };

  const onCloseDialog = () => {
    setSelectedItem("");
  };
  //マテリアルUI追加箇所▲

  return (
    <div>
      <Header />
      <Layout>
        <h1>デザインページ</h1>
        <Link href="/">HOME</Link>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className={styles.mySwiper}
        >
          {ButtonList.map((image, index) => (
            <SwiperSlide key={index} className={styles.swiperSliders}>
              <img src={`/images/design/${image}`} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* マテリアルUI追加箇所▼ */}
        <Box className={styles.bnr_container}>
          <Box className={styles.bnr_inner}>
            {ButtonList.map((item) => {
              return (
                <Box key={item} className={styles.button_container}>
                  <Button
                    onClick={() => onOpenDialog(item)}
                    className={styles.button_inner}
                  >
                    <img src={`/images/design/${item}`} alt="" />
                  </Button>
                  <Modal
                    open={item === selectedItem}
                    onClose={onCloseDialog}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Box sx={closeButtonStyle}>
                        <IconButton onClick={onCloseDialog}>
                          <CloseIcon />
                        </IconButton>
                      </Box>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <img src={`/images/design/${item}`} alt="" />
                      </Typography>
                    </Box>
                  </Modal>
                </Box>
              );
            })}
          </Box>
        </Box>
        {/* マテリアルUI追加箇所▲ */}
      </Layout>
    </div>
  );
}
