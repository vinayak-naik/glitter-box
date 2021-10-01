import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import {
  Box,
  Grid,
  Paper,
  CircularProgress,
  TextField,
  Button,
  Dialog,
  DialogTitle,
} from "@material-ui/core";
import Navbar from "../../components/navbar";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HomeComponent = () => {
  const [open, setOpen] = useState(false);
  const [cartId, setCartId] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();
 
  const dispatch = useDispatch();
  const customerList = useSelector((state) => state.customerList);
  const { loading, error, customers } = customerList;

  const customerCreate = useSelector((state) => state.customerCreate);
  const { success: successCreate } = customerCreate;

  // useEffect(() => {
  //   if (!localStorage.getItem("userInfo")) {
  //     history.push("/login");
  //   } else {
  //     dispatch(listCustomer());
  //     if(successCreate){
  //       setOpen(false)
  //     }
  //   }
  // }, [successCreate]);
  if (error == "Not authorized, token failed") {
    history.replace("/login");
  }

  // const routeHandler = () => history.replace("/profile");
  const routeHandler = () =>{
    history.replace("/login")
  };

  return (
    <div className={style.container}>
      <Navbar route={routeHandler} goto="Logout" />
      {loading ? (
        <div className={style.loaderPage}>
          <CircularProgress size={50} />
        </div>
      ) : (
        <div className={style.mainBox}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className={style.textFieldBox}>
                <TextField
                  // required
                  label="Cart Id"
                  variant="outlined"
                  type="number"
                  value={cartId}
                  onChange={(e) => setCartId(e.target.value)}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={style.textFieldBox}>
                <Button
                  // fullWidth
                  type="submit"
                  color="primary"
                  size="large"
                  variant="contained"
                  disabled={!cartId || loading}
                  // onClick={onSubmitHandler}
                  style={{ height: 50, width: 200 }}
                >
                  {loading ? <CircularProgress size={30} /> : "Fetch"}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} style={{marginTop:'20px'}}>
              <table>
                <tr>
                  <td>Id</td>
                  <td>Product Name</td>
                  <td>Qty</td>
                  <td>Price</td>
                  <td>Total Price</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>






                <tr className={style.itemRow}>
                  <td>1</td>
                  <td>Maggie</td>
                  <td>2</td>
                  <td>20</td>
                  <td>40</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>2</td>
                  <td>Lux</td>
                  <td>1</td>
                  <td>35</td>
                  <td>35</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>3</td>
                  <td>Santoor</td>
                  <td>5</td>
                  <td>15</td>
                  <td>79</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>4</td>
                  <td>Yippy</td>
                  <td>4</td>
                  <td>30</td>
                  <td>120</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>4</td>
                  <td>Yippy</td>
                  <td>4</td>
                  <td>30</td>
                  <td>120</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>4</td>
                  <td>Yippy</td>
                  <td>4</td>
                  <td>30</td>
                  <td>120</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>4</td>
                  <td>Yippy</td>
                  <td>4</td>
                  <td>30</td>
                  <td>120</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>4</td>
                  <td>Yippy</td>
                  <td>4</td>
                  <td>30</td>
                  <td>120</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>4</td>
                  <td>Yippy</td>
                  <td>4</td>
                  <td>30</td>
                  <td>120</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr className={style.itemRow}>
                  <td>4</td>
                  <td>Yippy</td>
                  <td>4</td>
                  <td>30</td>
                  <td>120</td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>














                <tr>
                  <td></td>
                  <td>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: "#16a062",
                        color: "white",
                        margin: "auto",
                      }}
                    >
                      Add Item
                    </Button>
                  </td>
                  <td></td>
                  <td></td>
                  <td>Total:</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Grid>
            <Grid item xs={12}  style={{marginBottom:'20px'}}>
              <Box className={style.textFieldBox}>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "rgb(0 74 255)",
                    color: "white",
                    margin: "auto",
                    margin: "0 20px",
                  }}
                >
                  Print Bill
                </Button>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "rgb(0 74 255)",
                    color: "white",
                    margin: "auto",
                    margin: "0 20px",
                  }}
                >
                  New Bill
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box className={style.dialogBox}>
            <Box>
              <span className={style.dialogtextHead}>Product: </span>
              <span className={style.dialogtext}>Maggie-200g</span>
            </Box>
            <Box style={{display:'flex',alignItems:'center',margin:'30px 0'}}>
              <span className={style.dialogtextHead}>Quantity:&nbsp;&nbsp;</span>
              <TextField
                  // required
                  label="Quantity"
                  variant="outlined"
                  type="number"
                  // value={cartId}
                  // onChange={(e) => setCartId(e.target.value)}
                />
            </Box>
            <Box>
              <span className={style.dialogtextHead}>Price: </span>
              <span className={style.dialogtext}>20$</span>
            </Box>
            <Box className={style.textFieldBox} style={{margin:'30px 0'}}>
              <Button
                size="large"
                style={{
                  backgroundColor: "rgb(0 74 255)",
                  color: "white",
                  margin: "auto",
                  margin: "0 20px",
                }}
              >
                Print Bill
              </Button>
              <Button
                size="large"
                style={{
                  backgroundColor: "rgb(0 74 255)",
                  color: "white",
                  margin: "auto",
                  margin: "0 20px",
                }}
              >
                New Bill
              </Button>
            </Box>
          </Box>
        </DialogTitle>
      </Dialog>
    </div>
  );
};

export default HomeComponent;
