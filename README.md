react-Tableta
=====================

A pretty simple way to add tabs to your react app. This one currently works with react@0.14.0-beta3. I WILL update for latest releases. Please be so kind to notify me about the issue and discuss any idea with me, or just contribute. :)

### Demo

I use react-hot-boilerplate for this demo which you can fild here https://github.com/gaearon/react-hot-boilerplate.git and it goes something like this.

```
git clone https://github.com/bannik/tableta.git
cd tableta/demo
npm install
npm start
open http://localhost:3000
```
### Node modules you need

```
react@0.14.0-beta3
```


### Using

Find the files tab.js and tableta.js in the scripts folder. Copy paste them to your project directory and include them to the file you need some tabs.

So your file should look something like this right now:

```
var tableta = require('/path/to/tableta.js');
var tab = require('/path/to/tab.js');
```

Ok so right now you have to use two components to make your tabs working. We have component tabketa which is our main component and has only one property which is called contName and it is the name of your choice for the class your content container will get.

So we start like this:

```
<tableta contName="content">
</tableta>
```

This basically shows our app that we will have some tabs there and their content container will have class content. So it will render to something like:

```
<div class="tableta">
	<ul class="tabletaNav">
	</ul>
	<div class="content">
	</div>
</div>
```
Cool? So now lets really fast add some actuall tabs to our app. First of all for you to know you can edit through properties:

```
Title of the tab: name="example"
The default active tab: active="active"
```

So our code for a tab would look like this

```
<tab name="example" active="active">
	and here is some amazing content
</tab>
```

And all together it would look like this

```
<tableta contName="content">
	<tab name="soda" active="active">
		Here is a list of soda available
	</tab>
	<tab name="food" active="active">
		Here is a list of food available
	</tab>
	<tab name="cookies" active="active">
		Here is a list of cookies available
	</tab>
</tableta>
```

Hope you'll enjoy :)