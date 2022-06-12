# OnTheGround API

![logo](./Logos/Logo-01.png)

**OnTheGround Open API** for everyone who want to get or store all knowledge about recycling in your area ✨ You can read the data and also write the data to our database. Please help us to cover all traches and local areas.

## <br/>

---

<br/>

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

### **GET** search items `/item?search={value}`

> Request body

```TS
{
	councilId: string;
	status?: 'pending' | 'approved' | 'rejected';
}
```

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