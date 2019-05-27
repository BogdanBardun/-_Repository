
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Name</title>
</head>
<body>
<% String name = request.getParameter("name"); %>
<%= "Name is " + name %>
</body>
</html>
