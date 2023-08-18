import { useState } from "react";
import { Layout } from "../../components/Layout";
import styles from "../../components/style/business_layout.module.scss";

import { Box, Button, Modal, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Production() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  return (
    <Layout title="WEBサイト制作">
      <div className={styles.production}>
        <div className={styles.website}>
          <h2>
            WEB SITE<span>WEBサイト</span>
          </h2>
          <div className={styles.website_container}>
            <div className={styles.left_container}>
              <img src="/images/business/production/tobu.jpg" alt="" />
              <div>
                <h3>東武鉄道公式サイト</h3>
                <p>
                  開発期間：1ヶ月
                  <br />
                  チーム人数：4人
                  <br />
                  担当：フロントエンドを担当
                  <br />
                </p>
              </div>
            </div>
            <div className={styles.right_container}>
              <Button onClick={handleOpen} className={styles.open_btn}>
                <Box className={styles.btn}></Box>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={styles.modal_container}
              >
                <Box sx={style} className={styles.modal_image}>
                  <IconButton
                    onClick={handleClose}
                    className={styles.close_btn}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <img src="/images/business/production/top.png" alt="" />
                  </Typography>
                </Box>
              </Modal>
              <img src="/images/business/production/top.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2>
            LANDING PAGE<span>ランディングページ</span>
          </h2>
        </div>
      </div>
    </Layout>
  );
}
