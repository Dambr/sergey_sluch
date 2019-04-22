function W(x1, x2){
	return eval("x1 + x2");
}
function len(x){
	return String(Math.round(x)).length;
}
// Шаг 1
d = 1.5;
x1 = 5;
x2 = x1 - d;
lam = 2;
b = 0.5;
y = 0.5;
r = 2;
M = 5;
Ef = 0.5;
// Шаг 2
_x1 = 0;
_x2 = 0;
while(true){
	x = [[x1, x2]];
	w = [];
	for (i = 1; i < M; i ++){
		phi = 2 * Math.random() - 1;
		x.push(x1 + lam * phi);
		x[i] = [x[i], x[i] - d];
	}
	for (i = 0; i < M; i ++){
		w.push(W(...x[i]));
	}
	par = 0;
	for (i = 1; i < M; i ++){
		if (w[i] > w[0]){
			par = i;
		}
	}
	if (par == 0){
		break;
	}
	_x1 = x[par][0];
	_x2 = x[par][1];
}
boo = true;
while(boo){
	// Шаг 3
	s_2 = [x1, x2];
	s_1 = [_x1, _x2];
	s = [ y * s_1[0] + (1 - y) * s_2[0], y * s_1[1] + (1 - y) * s_2[1] ];
	s_2 = s_1;
	s_1 = s;
	delta = [b * (s[0]/Math.pow(10, len(s[0]))) + (1 - b) * Math.random(), b * (s[1]/Math.pow(10, len(s[1]))) + (1 - b) * Math.random() ];
	x1 = _x1;
	x2 = _x2;
	_x1 = _x1 + lam * delta[0];
	_x2 = _x2 + lam * delta[1];
	f = W(_x1, _x2);
	// Шаг 4
	if (W(_x1, _x2) > W(x1, x2)){
		if (Math.abs(W(_x1, _x2) - W(x1, x2)) <= Ef){
			console.log(_x1, _x2);
			boo = false;
		}
	}
	else{
		lam = lam / 2;
		r += 1;
	}
}



