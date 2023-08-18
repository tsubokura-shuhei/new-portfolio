import { useEffect, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { imageFile } from "../lib/imageFile";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../components/style/design.module.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Layout } from "../components/Layout";
import Slider from "../components/atomic/templates/Slider";

export default function PageDesign() {
  const [moduleOpen, setModuleOpen] = useState(false);
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

  const [numberBtn, setNumberBtn] = useState<boolean>(false);

  useEffect(() => {
    setNumberBtn(false);
  }, []);

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
    <Layout title="Design">
      <h2>
        DESIGN<span>デザイン</span>
      </h2>

      <div className={styles.design_page_slider}>
        <Slider setBtn={numberBtn} />
      </div>

      <h2>
        BANNER<span>バナー</span>
      </h2>
      {/* マテリアルUI追加箇所▼ */}
      <Box className={styles.bnr_container}>
        <Box className={styles.bnr_inner}>
          {ButtonList.map((item, index) => (
            <Box key={index} className={styles.button_container}>
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
                <Box sx={style} className={styles.design_container}>
                  <Box sx={closeButtonStyle}>
                    <IconButton
                      onClick={onCloseDialog}
                      style={{
                        position: "relative",
                        top: "-20px",
                        right: "-20px",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    className={styles.design_image_container}
                  >
                    <img src={`/images/design/${item}`} alt="" />
                  </Typography>
                </Box>
              </Modal>
            </Box>
          ))}
        </Box>
      </Box>
      {/* マテリアルUI追加箇所▲ */}
    </Layout>
  );
}
