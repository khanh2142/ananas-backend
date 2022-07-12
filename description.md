<h1 align="center">Description Database :open_book:</h1>

# product_type

**1. Loại sản phẩm (_*`Type`*_)**

- _**`accessories`**_ : phụ kiện
- _**`top`**_ : nửa trên (áo)
- _**`footwear`**_ : lên chân (giày,tất)

**2. Bộ sưu tập (_*`Collection`*_)**

    Tập hợp các bộ sưu tập của các loại sản phẩm.

**3. Danh mục (_*`Category`*_)**

    Tập hợp danh mục của các loại sản phẩm.

**4. Chất liệu (_*`Material`*_)**

    Tập hợp chất liệu của các loại sản phẩm.

**5. Màu sắc (_*`Color`*_)**

    Tập hợp màu sắc của các loại sản phẩm.

**6. Size**

    Tập hợp size của các loại sản phẩm.

- Với **_`accessories`_** : **_`null`_**
- Với **_`top`_** : **_`S`_**,**_`M`_**,**_`L`_** và **_`XL`_**
- Với **_`footwear`_** : **_`35`_** đến **_`46`_**

**6. Color**

    Tập hợp màu chủ đạo của các loại sản phẩm.

**7. Bảo hành (_*`Warranty`*_)**

    Thông tin về bảo hành loại sản phẩm.

**8. Đổi trả (_*`Exchange`*_)**

    Thông tin về đổi trả với loại sản phẩm.

> Schema

| #          | Data type |
| ---------- | --------- |
| \_id       | ObjectId  |
| type       | String    |
| collection | Array     |
| category   | Array     |
| material   | Array     |
| color      | Array     |
| warranty   | String    |
| exchange   | String    |

# product_design *`(chỉ dành cho giày)`*

**1. Thiết kế sản phẩm / kiểu dáng sản phẩm (chỉ dành cho giày)**

**2. Các thiết kế bao gồm**

- _**`low top`**_
- _**`high top`**_
- _**`slip-on`**_
- _**`mid top`**_
- _**`mule`**_

> Schema

| #       | Data type |
| ------- | --------- |
| \_id    | ObjectId  |
| content | String    |

# product_status *`(dành cho mọi loại sản phẩm)`*

**1. Trạng thái sản phẩm**

- _**`limited edtion`**_ : bản giới hạn
- _**`online only`**_ : chỉ có thể mua online
- _**`sale off`**_ : những bản đang giảm giá (giá sale < giá gốc)
- _**`best seller`**_ : những bản giảm giá sâu (giá sale < giá gốc)
- _**`new arrival`**_ : những bản mới ra mắt (query theo thời gian)

> Schema

| #       | Data type |
| ------- | --------- |
| \_id    | ObjectId  |
| content | String    |

# product

**1. Tên sản phẩm (_*`Name`*_)**

    Lưu trữ tên sản phẩm.

**2. Mã sản phẩm (_*`Product_id`*_)**

    Mã sản phẩm được generate theo _id.

**Giải thích :**

- Ta có một _**`ObjectId`**_ được generate bởi MongoDB : _**`62cb04edd6baa07964ccf95b`**_
- Giờ ta sẽ cắt lấy 5 ký tự cuối cùng của \_id vừa rồi : _**`cf95b`**_
- Nối nó với chuỗi _**`ana`**_ cho trước
- Bây giờ ta được một _**`product_id`**_ : _**`anacf95b`**_

**3. Giá gốc của sản phẩm (_*`Price_root`*_)**

**4. Giá sale của sản phẩm (_*`Price_sale`*_)**

**5. Mô tả sản phẩm (_*`Description`*_)**

    Các thông tin mô tả hoặc giới thiệu về sản phẩm.

**6. Thông tin về sản phẩm (_*`Information`*_)**

    Các thông tin chi tiết về sản phẩm.

**7. Màu sắc (_*`Color`*_)**

    Màu của sản phẩm.

**7. Danh sách size và số lượng (_*`List`*_)**

    Danh sách size và số lượng mặt hàng.

- _**`Size`**_
- _**`Quantity`**_

> Schema

| #           | Data type |
| ----------- | --------- |
| \_id        | ObjectId  |
| name        | String    |
| product_id  | String    |
| price_root  | Number    |
| price_sale  | Number    |
| description | String    |
| information | String    |
| color       | String    |
| list        | Array     |

<p style="padding : 1000px">1<p>
