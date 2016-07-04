#version 330

in vec3 vColor;
out vec4 fragColor;

void main()
{
    fragColor = vec4(vColor, 1.0f);
    if (int(gl_FragCoord.x) % 2 == 0) {
        discard;
    }
}
