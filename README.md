# OnTheGround OPEN API

![logo](./Logos/Logo-01.png)

**OnTheGround Open API** for everyone who want to get or store all knowledge about recycling in your area ✨ You can read the data and also write the data to our database. Please help us to cover all trashes and local areas. Some garbage is still too early to be buried under the ground.

## <br/>

---

<br/>

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

## 🙋 [Join Our Beta Testing](https://docs.google.com/forms/d/e/1FAIpQLSfCf3AFGsCvNG2ghCwa3NSUaflzIC2cWN8mxH8FAY-JsMfJuw/viewform?usp=sf_link)

 <br/>

---

<br/>

## Councils

### **GET** all councils `/councils`

> Request Body

> Response

```TS
status: 200

Council[]
```

### **POST** create a council `/council`

> Request body

```TS
{
  councilName : string;
}
```

> Response

```TS
status: 201

Council
```

---

<br/>

## Items

### **GET** all items `/allitem`

> Request Body

> Response

```TS
status: 200

Item[]
```

### **GET** search items `/item?search={value}&councilId={value}`

> Request body

> response

```TS
status: 200

Item[]
```

### **GET** recent search item `/recentItem`

> Request body
> Response

```TS
status: 200

Item
```

### **POST** add item `/item`

> Request body

```TS
{
  itemName: string;
  itemImage?: string;
  isRecyclable: boolean;
  howToRecycle?: string | null;
  upcycleVideo?: string;
  councilId: string;
  categoryId: string;
}
```

> response

```TS
status: 201

Item
```

### **PATCH** update item `/item/:id`

> Reqeust body

```TS
{
  itemName?: string;
  itemImage?: string;
  isRecyclable?: boolean;
  howToRecycle?: string | null;
  upcycleVideo?: string;
  councilId?: string;
  categoryId?: string;
  status?: 'pending' | 'approved' | 'rejected';
}
```

> Response

```TS
status: 200

Item
```

---

<br/>

## Categories

### **GET** all categories `/categories`

> Request Body
> Response

```TS
status: 200

category[]
```

### **POST** create category `/category`

> Request Body

```TS
{
  categoryName: string;
}
```

> Response

```TS
status: 201

category
```

---

</br>
</br>

## Data Structure

```TS
council: {
  councilId: string;
  councilName: string;
}

item: {
  itemId: string;
  itemName: string;
  itemImage: string;
  isRecyclable: boolean;
  howToRecycle: string | null;
  upcycleVideo: string | null;
  councilId: string;
  categoryId: string | null;
  status: 'pending' | 'approved' | 'rejected';
}

category: {
  categoryId: number;
  categoryName: string;
}
```
